from flask import Flask,render_template,request,redirect
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import datetime

app=Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.after_request
def add_header(response):
    # response.cache_control.no_store = True
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agree',methods=['POST','GET'])
def agree():
    if request.method=='POST':
        return render_template('agree.html')
    else:
        return redirect('/')

@app.route('/disagree',methods=['POST','GET'])
def disagree():
    if request.method=='POST':
        return render_template('disagree.html')
    else:
        return redirect('/')

@app.route('/submit_agree',methods=['POST','GET'])
def submit_agree():
    if request.method=='POST':
        d={}

        d['Email']=request.form['Email']
        d['Resident_1']=request.form['Resident1']
        d['Resident_2']=request.form['Resident2']
        d['Resident_3']=request.form['Resident3']
        d['Religion']=request.form['Religion']
        d['Caste']=request.form['Caste']
        d['Income']=request.form['Income']
        d['Domestic_help_part_time']=request.form['Domestic_help_part_time']
        d['Domestic_help_full_time']=request.form['Domestic_help_full_time']
        d['Pincode']=request.form['Pincode']
        d['Residence_type']=request.form['Residence_type']
        d['Apartment_type']=request.form['Apartment_type']
        d['Residence_ownership']=request.form['Residence_ownership']
        d['Vehicle_ownership']=request.form['Vehicle_ownership']
        d['Vehicle_type']=request.form['Vehicle_type']
        d['Appliances']=str(request.form.getlist('Appliances'))
        d['Daycare_hrs']=request.form['Daycare_hrs']
        d['Laundry']=request.form['Laundry']
        d['Driver']=request.form['Driver']
        d['Driver_use']=request.form['Driver_use']
        d['Covid19_infected']=request.form['Covid19_infected']
        d['Covid19_lost_job']=request.form['Covid19_lost_job']
        d['Domestic_help_available']=request.form['Domestic_help_available']


        #18
        d['Relationship_1']=request.form['Relationship_1']
        d['Age_1']=request.form['Age_1']
        d['Gender_1']=request.form['Gender_1']
        d['Marital_Status_1']=request.form['Marital_Status_1']
        d['Employment_Status_1']=request.form['Employment_Status_1']
        d['Occupation_1']=request.form['Occupation_1']
        d['Industry_1']=request.form['Industry_1']
        d['Education_1']=request.form['Education_1']
        d['Disability_1']=request.form['Disability_1']
        d['Respondent_1']=request.form['Respondent_1']
        d['Work_from_home_1']=request.form['Work_from_home_1']
        d['Member_in_household_1']=request.form['Member_in_household_1']
        d['Temporary_in_household_1']=request.form['Temporary_in_household_1']

        d['Relationship_2']=request.form['Relationship_2']
        d['Age_2']=request.form['Age_2']
        d['Gender_2']=request.form['Gender_2']
        d['Marital_Status_2']=request.form['Marital_Status_2']
        d['Employment_Status_2']=request.form['Employment_Status_2']
        d['Occupation_2']=request.form['Occupation_2']
        d['Industry_2']=request.form['Industry_2']
        d['Education_2']=request.form['Education_2']
        d['Disability_2']=request.form['Disability_2']
        d['Respondent_2']=request.form['Respondent_2']
        d['Work_from_home_2']=request.form['Work_from_home_2']
        d['Member_in_household_2']=request.form['Member_in_household_2']
        d['Temporary_in_household_2']=request.form['Temporary_in_household_2']

        #21
        d['Self_Care_bool']=request.form['Self_Care_bool']
        d['Self_Care_total_hr']=request.form['Self_Care_total_hr']
        d['Self_Care_avg_hr']=request.form['Self_Care_avg_hr']

        d['Travel_bool']=request.form['Travel_bool']
        d['Travel_total_hr']=request.form['Travel_total_hr']
        d['Travel_avg_hr']=request.form['Travel_avg_hr']

        d['Work_bool']=request.form['Work_bool']
        d['Work_total_time']=request.form['Work_total_time']
        d['Work_avg_time']=request.form['Work_avg_time']

        d['Eating_bool']=request.form['Eating_bool']
        d['Eating_total_time']=request.form['Eating_total_time']
        d['Eating_avg_time']=request.form['Eating_avg_time']

        d['Sleeping_bool']=request.form['Sleeping_bool']
        d['Sleeping_total_time']=request.form['Sleeping_total_time']
        d['Sleeping_avg_time']=request.form['Sleeping_avg_time']

        d['Studying_bool']=request.form['Studying_bool']
        d['Studying_total_time']=request.form['Studying_total_time']
        d['Studying_avg_time']=request.form['Studying_avg_time']

        d['Leisure_bool']=request.form['Leisure_bool']
        d['Leisure_total_time']=request.form['Leisure_total_time']
        d['Leisure_avg_time']=request.form['Leisure_avg_time']

        d['Job_searching_bool']=request.form['Job_searching_bool']
        d['Job_searching_total_time']=request.form['Job_searching_total_time']
        d['Job_searching_avg_time']=request.form['Job_searching_avg_time']

        d['Household_work_bool']=request.form['Household_work_bool']
        d['Household_work_total_time']=request.form['Household_work_total_time']
        d['Household_work_avg_time']=request.form['Household_work_avg_time']

        d['Cooking_bool']=request.form['Cooking_bool']
        d['Cooking_total_time']=request.form['Cooking_total_time']
        d['Cooking_avg_time']=request.form['Cooking_avg_time']

        d['Utensils_clean_bool']=request.form['Utensils_clean_bool']
        d['Utensils_clean_total_time']=request.form['Utensils_clean_total_time']
        d['Utensils_clean_avg_time']=request.form['Utensils_clean_avg_time']

        d['Washing_clothes_bool']=request.form['Washing_clothes_bool']
        d['Washing_clothes_total_time']=request.form['Washing_clothes_total_time']
        d['Washing_clothes_avg_time']=request.form['Washing_clothes_avg_time']

        d['Ironing_clothes_bool']=request.form['Ironing_clothes_bool']
        d['Ironing_clothes_total_time']=request.form['Ironing_clothes_total_time']
        d['Ironing_clothes_avg_time']=request.form['Ironing_clothes_avg_time']

        d['Household_clean_bool']=request.form['Household_clean_bool']
        d['Household_clean_total_time']=request.form['Household_clean_total_time']
        d['Household_clean_avg_time']=request.form['Household_clean_avg_time']

        d['Teaching_children_bool']=request.form['Teaching_children_bool']
        d['Teaching_children_total_time']=request.form['Teaching_children_total_time']
        d['Teaching_children_avg_time']=request.form['Teaching_children_avg_time']

        d['Elderly_person_care_bool']=request.form['Elderly_person_care_bool']
        d['Elderly_person_care_total_time']=request.form['Elderly_person_care_total_time']
        d['Elderly_person_care_avg_time']=request.form['Elderly_person_care_avg_time']

        d['Shoping_bool']=request.form['Shoping_bool']
        d['Shoping_total_time']=request.form['Shoping_total_time']
        d['Shoping_avg_time']=request.form['Shoping_avg_time']

        d['Outside_time_bool']=request.form['Outside_time_bool']
        d['Outside_time_total_time']=request.form['Outside_time_total_time']
        d['Outside_time_avg_time']=request.form['Outside_time_avg_time']

        #23
        d['Preparing_food_activity']=request.form['Preparing_food_activity']
        d['Cleaning_food_activity']=request.form['Cleaning_food_activity']
        d['Cleaning_clothes_activity']=request.form['Cleaning_clothes_activity']
        d['Folding_clothes_activity']=request.form['Folding_clothes_activity']
        d['Ironing_clothes_activity']=request.form['Ironing_clothes_activity']
        d['Brooming_activity']=request.form['Brooming_activity']
        d['Mopping_activity']=request.form['Mopping_activity']
        d['Children_activity']=request.form['Children_activity']

        d['Primary_key']=str(datetime.datetime.now())


##        f=open('file.txt','w')
##        for i in d:
##            f.write(str(i)+'-'+str(d[i])+'\n')
##        f.close()

        scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
        creds = ServiceAccountCredentials.from_json_keyfile_name("creds_1.json", scope)
        client = gspread.authorize(creds)
        sheet = client.open("General_Report").sheet1
        data = sheet.get_all_records()
        no_rows=len(data)
        
        insertRow = [d['Primary_key'],
                     d['Email'],
                     d['Resident_1'],
                     d['Resident_2'],
                     d['Resident_3'],
                     d['Religion'],
                     d['Caste'],
                     d['Income'],
                     d['Domestic_help_part_time'],
                     d['Domestic_help_full_time'],
                     d['Pincode'],
                     d['Residence_type'],
                     d['Apartment_type'],
                     d['Residence_ownership'],
                     d['Vehicle_ownership'],
                     d['Vehicle_type'],
                     d['Appliances'],
                     d['Daycare_hrs'],
                     d['Laundry'],
                     d['Driver'],
                     d['Driver_use'],
                     d['Covid19_infected'],
                     d['Covid19_lost_job'],
                     d['Domestic_help_available']]
                     

        sheet.insert_row(insertRow,no_rows+2)

        return render_template('submit_agree.html')

    else:
        return redirect('/')



@app.route('/submit_disagree',methods=['POST','GET'])
def submit_disagree():
    if request.method=='POST':
        d={}
        
        d['Resident_1']=request.form['Resident1']
        d['Resident_2']=request.form['Resident2']
        d['Income']=request.form['Income']
        d['Reason']=request.form['Reason']

        f=open('file.txt','w')
        for i in d:
            f.write(str(i)+'-'+str(d[i])+'\n')
        f.close()
        return render_template('submit_disagree.html')

    else:
        return redirect('/')

if __name__=='__main__':
    app.run(debug=True)
