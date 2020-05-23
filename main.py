from flask import Flask,render_template,request,redirect
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import datetime


START_TIME=''
END_TIME=''

def encrypt(x):
    l=list(x)
    s=''
    for i in range(len(l)):
        s+=chr(ord(l[i])+2)
    return s




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
    f=open('counter.txt','r')
    count=int(f.read())
    f.close()
    f=open('counter.txt','w')
    f.write(str(count+1))
    f.close()
    return render_template('index.html',counter=count)

@app.route('/agree',methods=['POST','GET'])
def agree():
    global START_TIME
    if request.method=='POST':
        START_TIME=str(datetime.datetime.now())
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
    global END_TIME
    if request.method=='POST':
        END_TIME=str(datetime.datetime.now())
        d={}

        d['Email']=request.form['Email']
        d['Resident_1']=request.form['Resident1']
        d['Resident_2']=request.form['Resident2']
        d['Resident_3']=request.form['Resident3']
        d['Religion']=request.form['Religion']
        try: d['Caste']=request.form['Caste']
        except: d['Caste']='NA'
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
        try: d['Relationship_1']=request.form['Relationship_1']
        except: d['Relationship_1']=''
        try: d['Age_1']=request.form['Age_1']
        except: d['Age_1']=''
        try: d['Gender_1']=request.form['Gender_1']
        except: d['Gender_1']=''
        try: d['Marital_Status_1']=request.form['Marital_Status_1']
        except: d['Marital_Status_1']=''
        try: d['Employment_Status_1']=request.form['Employment_Status_1']
        except: d['Employment_Status_1']=''
        try: d['Occupation_1']=request.form['Occupation_1']
        except: d['Occupation_1']=''
        try: d['Industry_1']=request.form['Industry_1']
        except: d['Industry_1']=''
        try: d['Education_1']=request.form['Education_1']
        except: d['Education_1']=''
        try: d['Disability_1']=request.form['Disability_1']
        except: d['Disability_1']=''
        try: d['Respondent_1']=request.form['Respondent_1']
        except: d['Respondent_1']=''
        try: d['Work_from_home_1']=request.form['Work_from_home_1']
        except: d['Work_from_home_1']=''
        try: d['Member_in_household_1']=request.form['Member_in_household_1']
        except: d['Member_in_household_1']=''
        try: d['Temporary_in_household_1']=request.form['Temporary_in_household_1']
        except: d['Temporary_in_household_1']=''

        try: d['Relationship_2']=request.form['Relationship_2']
        except: d['Relationship_2']=''
        try: d['Age_2']=request.form['Age_2']
        except: d['Age_2']=''
        try: d['Gender_2']=request.form['Gender_2']
        except: d['Gender_2']=''
        try: d['Marital_Status_2']=request.form['Marital_Status_2']
        except: d['Marital_Status_2']=''
        try: d['Employment_Status_2']=request.form['Employment_Status_2']
        except: d['Employment_Status_2']=''
        try: d['Occupation_2']=request.form['Occupation_2']
        except: d['Occupation_2']=''
        try: d['Industry_2']=request.form['Industry_2']
        except: d['Industry_2']=''
        try: d['Education_2']=request.form['Education_2']
        except: d['Education_2']=''
        try: d['Disability_2']=request.form['Disability_2']
        except: d['Disability_2']=''
        try: d['Respondent_2']=request.form['Respondent_2']
        except: d['Respondent_2']=''
        try: d['Work_from_home_2']=request.form['Work_from_home_2']
        except: d['Work_from_home_2']=''
        try: d['Member_in_household_2']=request.form['Member_in_household_2']
        except: d['Member_in_household_2']=''
        try: d['Temporary_in_household_2']=request.form['Temporary_in_household_2']
        except: d['Temporary_in_household_2']=''

        try: d['Relationship_3']=request.form['Relationship_3']
        except: d['Relationship_3']=''
        try: d['Age_3']=request.form['Age_3']
        except: d['Age_3']=''
        try: d['Gender_3']=request.form['Gender_3']
        except: d['Gender_3']=''
        try: d['Marital_Status_3']=request.form['Marital_Status_3']
        except: d['Marital_Status_3']=''
        try: d['Employment_Status_3']=request.form['Employment_Status_3']
        except: d['Employment_Status_3']=''
        try: d['Occupation_3']=request.form['Occupation_3']
        except: d['Occupation_3']=''
        try: d['Industry_3']=request.form['Industry_3']
        except: d['Industry_3']=''
        try: d['Education_3']=request.form['Education_3']
        except: d['Education_3']=''
        try: d['Disability_3']=request.form['Disability_3']
        except: d['Disability_3']=''
        try: d['Respondent_3']=request.form['Respondent_3']
        except: d['Respondent_3']=''
        try: d['Work_from_home_3']=request.form['Work_from_home_3']
        except: d['Work_from_home_3']=''
        try: d['Member_in_household_3']=request.form['Member_in_household_3']
        except: d['Member_in_household_3']=''
        try: d['Temporary_in_household_3']=request.form['Temporary_in_household_3']
        except: d['Temporary_in_household_3']=''

        try: d['Relationship_4']=request.form['Relationship_4']
        except: d['Relationship_4']=''
        try: d['Age_4']=request.form['Age_4']
        except: d['Age_4']=''
        try: d['Gender_4']=request.form['Gender_4']
        except: d['Gender_4']=''
        try: d['Marital_Status_4']=request.form['Marital_Status_4']
        except: d['Marital_Status_4']=''
        try: d['Employment_Status_4']=request.form['Employment_Status_4']
        except: d['Employment_Status_4']=''
        try: d['Occupation_4']=request.form['Occupation_4']
        except: d['Occupation_4']=''
        try: d['Industry_4']=request.form['Industry_4']
        except: d['Industry_4']=''
        try: d['Education_4']=request.form['Education_4']
        except: d['Education_4']=''
        try: d['Disability_4']=request.form['Disability_4']
        except: d['Disability_4']=''
        try: d['Respondent_4']=request.form['Respondent_4']
        except: d['Respondent_4']=''
        try: d['Work_from_home_4']=request.form['Work_from_home_4']
        except: d['Work_from_home_4']=''
        try: d['Member_in_household_4']=request.form['Member_in_household_4']
        except: d['Member_in_household_4']=''
        try: d['Temporary_in_household_4']=request.form['Temporary_in_household_4']
        except: d['Temporary_in_household_4']=''

        try: d['Relationship_5']=request.form['Relationship_5']
        except: d['Relationship_5']=''
        try: d['Age_5']=request.form['Age_5']
        except: d['Age_5']=''
        try: d['Gender_5']=request.form['Gender_5']
        except: d['Gender_5']=''
        try: d['Marital_Status_5']=request.form['Marital_Status_5']
        except: d['Marital_Status_5']=''
        try: d['Employment_Status_5']=request.form['Employment_Status_5']
        except: d['Employment_Status_5']=''
        try: d['Occupation_5']=request.form['Occupation_5']
        except: d['Occupation_5']=''
        try: d['Industry_5']=request.form['Industry_5']
        except: d['Industry_5']=''
        try: d['Education_5']=request.form['Education_5']
        except: d['Education_5']=''
        try: d['Disability_5']=request.form['Disability_5']
        except: d['Disability_5']=''
        try: d['Respondent_5']=request.form['Respondent_5']
        except: d['Respondent_5']=''
        try: d['Work_from_home_5']=request.form['Work_from_home_5']
        except: d['Work_from_home_5']=''
        try: d['Member_in_household_5']=request.form['Member_in_household_5']
        except: d['Member_in_household_5']=''
        try: d['Temporary_in_household_5']=request.form['Temporary_in_household_5']
        except: d['Temporary_in_household_5']=''

        try: d['Relationship_6']=request.form['Relationship_6']
        except: d['Relationship_6']=''
        try: d['Age_6']=request.form['Age_6']
        except: d['Age_6']=''
        try: d['Gender_6']=request.form['Gender_6']
        except: d['Gender_6']=''
        try: d['Marital_Status_6']=request.form['Marital_Status_6']
        except: d['Marital_Status_6']=''
        try: d['Employment_Status_6']=request.form['Employment_Status_6']
        except: d['Employment_Status_6']=''
        try: d['Occupation_6']=request.form['Occupation_6']
        except: d['Occupation_6']=''
        try: d['Industry_6']=request.form['Industry_6']
        except: d['Industry_6']=''
        try: d['Education_6']=request.form['Education_6']
        except: d['Education_6']=''
        try: d['Disability_6']=request.form['Disability_6']
        except: d['Disability_6']=''
        try: d['Respondent_6']=request.form['Respondent_6']
        except: d['Respondent_6']=''
        try: d['Work_from_home_6']=request.form['Work_from_home_6']
        except: d['Work_from_home_6']=''
        try: d['Member_in_household_6']=request.form['Member_in_household_6']
        except: d['Member_in_household_6']=''
        try: d['Temporary_in_household_6']=request.form['Temporary_in_household_6']
        except: d['Temporary_in_household_6']=''

        #21
        try: d['Self_Care_total_hr_1']=request.form['Self_Care_total_hr_1']
        except: d['Self_Care_total_hr_1']=''
        try: d['Self_Care_avg_hr_1']=request.form['Self_Care_avg_hr_1']
        except: d['Self_Care_avg_hr_1']=''
        try: d['Travel_total_hr_1']=request.form['Travel_total_hr_1']
        except: d['Travel_total_hr_1']=''
        try: d['Travel_avg_hr_1']=request.form['Travel_avg_hr_1']
        except: d['Travel_avg_hr_1']=''
        try: d['Work_total_time_1']=request.form['Work_total_time_1']
        except: d['Work_total_time_1']=''
        try: d['Work_avg_time_1']=request.form['Work_avg_time_1']
        except: d['Work_avg_time_1']=''
        try: d['Eating_total_time_1']=request.form['Eating_total_time_1']
        except: d['Eating_total_time_1']=''
        try: d['Eating_avg_time_1']=request.form['Eating_avg_time_1']
        except: d['Eating_avg_time_1']=''
        try: d['Sleeping_total_time_1']=request.form['Sleeping_total_time_1']
        except: d['Sleeping_total_time_1']=''
        try: d['Sleeping_avg_time_1']=request.form['Sleeping_avg_time_1']
        except: d['Sleeping_avg_time_1']=''
        try: d['Studying_total_time_1']=request.form['Studying_total_time_1']
        except: d['Studying_total_time_1']=''
        try: d['Studying_avg_time_1']=request.form['Studying_avg_time_1']
        except: d['Studying_avg_time_1']=''
        try: d['Leisure_total_time_1']=request.form['Leisure_total_time_1']
        except: d['Leisure_total_time_1']=''
        try: d['Leisure_avg_time_1']=request.form['Leisure_avg_time_1']
        except: d['Leisure_avg_time_1']=''
        try: d['Job_searching_total_time_1']=request.form['Job_searching_total_time_1']
        except: d['Job_searching_total_time_1']=''
        try: d['Job_searching_avg_time_1']=request.form['Job_searching_avg_time_1']
        except: d['Job_searching_avg_time_1']=''
        try: d['Household_work_total_time_1']=request.form['Household_work_total_time_1']
        except: d['Household_work_total_time_1']=''
        try: d['Household_work_avg_time_1']=request.form['Household_work_avg_time_1']
        except: d['Household_work_avg_time_1']=''
        try: d['Cooking_total_time_1']=request.form['Cooking_total_time_1']
        except: d['Cooking_total_time_1']=''
        try: d['Cooking_avg_time_1']=request.form['Cooking_avg_time_1']
        except: d['Cooking_avg_time_1']=''
        try: d['Utensils_clean_total_time_1']=request.form['Utensils_clean_total_time_1']
        except: d['Utensils_clean_total_time_1']=''
        try: d['Utensils_clean_avg_time_1']=request.form['Utensils_clean_avg_time_1']
        except: d['Utensils_clean_avg_time_1']=''
        try: d['Washing_clothes_total_time_1']=request.form['Washing_clothes_total_time_1']
        except: d['Washing_clothes_total_time_1']=''
        try: d['Washing_clothes_avg_time_1']=request.form['Washing_clothes_avg_time_1']
        except: d['Washing_clothes_avg_time_1']=''
        try: d['Ironing_clothes_total_time_1']=request.form['Ironing_clothes_total_time_1']
        except: d['Ironing_clothes_total_time_1']=''
        try: d['Ironing_clothes_avg_time_1']=request.form['Ironing_clothes_avg_time_1']
        except: d['Ironing_clothes_avg_time_1']=''
        try: d['Household_clean_total_time_1']=request.form['Household_clean_total_time_1']
        except: d['Household_clean_total_time_1']=''
        try: d['Household_clean_avg_time_1']=request.form['Household_clean_avg_time_1']
        except: d['Household_clean_avg_time_1']=''
        try: d['Teaching_children_total_time_1']=request.form['Teaching_children_total_time_1']
        except: d['Teaching_children_total_time_1']=''
        try: d['Teaching_children_avg_time_1']=request.form['Teaching_children_avg_time_1']
        except: d['Teaching_children_avg_time_1']=''
        try: d['Elderly_person_care_total_time_1']=request.form['Elderly_person_care_total_time_1']
        except: d['Elderly_person_care_total_time_1']=''
        try: d['Elderly_person_care_avg_time_1']=request.form['Elderly_person_care_avg_time_1']
        except: d['Elderly_person_care_avg_time_1']=''
        try: d['Shoping_total_time_1']=request.form['Shoping_total_time_1']
        except: d['Shoping_total_time_1']=''
        try: d['Shoping_avg_time_1']=request.form['Shoping_avg_time_1']
        except: d['Shoping_avg_time_1']=''
        try: d['Outside_time_total_time_1']=request.form['Outside_time_total_time_1']
        except: d['Outside_time_total_time_1']=''
        try: d['Outside_time_avg_time_1']=request.form['Outside_time_avg_time_1']
        except: d['Outside_time_avg_time_1']=''


        try: d['Self_Care_total_hr_2']=request.form['Self_Care_total_hr_2']
        except: d['Self_Care_total_hr_2']=''
        try: d['Self_Care_avg_hr_2']=request.form['Self_Care_avg_hr_2']
        except: d['Self_Care_avg_hr_2']=''
        try: d['Travel_total_hr_2']=request.form['Travel_total_hr_2']
        except: d['Travel_total_hr_2']=''
        try: d['Travel_avg_hr_2']=request.form['Travel_avg_hr_2']
        except: d['Travel_avg_hr_2']=''
        try: d['Work_total_time_2']=request.form['Work_total_time_2']
        except: d['Work_total_time_2']=''
        try: d['Work_avg_time_2']=request.form['Work_avg_time_2']
        except: d['Work_avg_time_2']=''
        try: d['Eating_total_time_2']=request.form['Eating_total_time_2']
        except: d['Eating_total_time_2']=''
        try: d['Eating_avg_time_2']=request.form['Eating_avg_time_2']
        except: d['Eating_avg_time_2']=''
        try: d['Sleeping_total_time_2']=request.form['Sleeping_total_time_2']
        except: d['Sleeping_total_time_2']=''
        try: d['Sleeping_avg_time_2']=request.form['Sleeping_avg_time_2']
        except: d['Sleeping_avg_time_2']=''
        try: d['Studying_total_time_2']=request.form['Studying_total_time_2']
        except: d['Studying_total_time_2']=''
        try: d['Studying_avg_time_2']=request.form['Studying_avg_time_2']
        except: d['Studying_avg_time_2']=''
        try: d['Leisure_total_time_2']=request.form['Leisure_total_time_2']
        except: d['Leisure_total_time_2']=''
        try: d['Leisure_avg_time_2']=request.form['Leisure_avg_time_2']
        except: d['Leisure_avg_time_2']=''
        try: d['Job_searching_total_time_2']=request.form['Job_searching_total_time_2']
        except: d['Job_searching_total_time_2']=''
        try: d['Job_searching_avg_time_2']=request.form['Job_searching_avg_time_2']
        except: d['Job_searching_avg_time_2']=''
        try: d['Household_work_total_time_2']=request.form['Household_work_total_time_2']
        except: d['Household_work_total_time_2']=''
        try: d['Household_work_avg_time_2']=request.form['Household_work_avg_time_2']
        except: d['Household_work_avg_time_2']=''
        try: d['Cooking_total_time_2']=request.form['Cooking_total_time_2']
        except: d['Cooking_total_time_2']=''
        try: d['Cooking_avg_time_2']=request.form['Cooking_avg_time_2']
        except: d['Cooking_avg_time_2']=''
        try: d['Utensils_clean_total_time_2']=request.form['Utensils_clean_total_time_2']
        except: d['Utensils_clean_total_time_2']=''
        try: d['Utensils_clean_avg_time_2']=request.form['Utensils_clean_avg_time_2']
        except: d['Utensils_clean_avg_time_2']=''
        try: d['Washing_clothes_total_time_2']=request.form['Washing_clothes_total_time_2']
        except: d['Washing_clothes_total_time_2']=''
        try: d['Washing_clothes_avg_time_2']=request.form['Washing_clothes_avg_time_2']
        except: d['Washing_clothes_avg_time_2']=''
        try: d['Ironing_clothes_total_time_2']=request.form['Ironing_clothes_total_time_2']
        except: d['Ironing_clothes_total_time_2']=''
        try: d['Ironing_clothes_avg_time_2']=request.form['Ironing_clothes_avg_time_2']
        except: d['Ironing_clothes_avg_time_2']=''
        try: d['Household_clean_total_time_2']=request.form['Household_clean_total_time_2']
        except: d['Household_clean_total_time_2']=''
        try: d['Household_clean_avg_time_2']=request.form['Household_clean_avg_time_2']
        except: d['Household_clean_avg_time_2']=''
        try: d['Teaching_children_total_time_2']=request.form['Teaching_children_total_time_2']
        except: d['Teaching_children_total_time_2']=''
        try: d['Teaching_children_avg_time_2']=request.form['Teaching_children_avg_time_2']
        except: d['Teaching_children_avg_time_2']=''
        try: d['Elderly_person_care_total_time_2']=request.form['Elderly_person_care_total_time_2']
        except: d['Elderly_person_care_total_time_2']=''
        try: d['Elderly_person_care_avg_time_2']=request.form['Elderly_person_care_avg_time_2']
        except: d['Elderly_person_care_avg_time_2']=''
        try: d['Shoping_total_time_2']=request.form['Shoping_total_time_2']
        except: d['Shoping_total_time_2']=''
        try: d['Shoping_avg_time_2']=request.form['Shoping_avg_time_2']
        except: d['Shoping_avg_time_2']=''
        try: d['Outside_time_total_time_2']=request.form['Outside_time_total_time_2']
        except: d['Outside_time_total_time_2']=''
        try: d['Outside_time_avg_time_2']=request.form['Outside_time_avg_time_2']
        except: d['Outside_time_avg_time_2']=''

        try: d['Self_Care_total_hr_3']=request.form['Self_Care_total_hr_3']
        except: d['Self_Care_total_hr_3']=''
        try: d['Self_Care_avg_hr_3']=request.form['Self_Care_avg_hr_3']
        except: d['Self_Care_avg_hr_3']=''
        try: d['Travel_total_hr_3']=request.form['Travel_total_hr_3']
        except: d['Travel_total_hr_3']=''
        try: d['Travel_avg_hr_3']=request.form['Travel_avg_hr_3']
        except: d['Travel_avg_hr_3']=''
        try: d['Work_total_time_3']=request.form['Work_total_time_3']
        except: d['Work_total_time_3']=''
        try: d['Work_avg_time_3']=request.form['Work_avg_time_3']
        except: d['Work_avg_time_3']=''
        try: d['Eating_total_time_3']=request.form['Eating_total_time_3']
        except: d['Eating_total_time_3']=''
        try: d['Eating_avg_time_3']=request.form['Eating_avg_time_3']
        except: d['Eating_avg_time_3']=''
        try: d['Sleeping_total_time_3']=request.form['Sleeping_total_time_3']
        except: d['Sleeping_total_time_3']=''
        try: d['Sleeping_avg_time_3']=request.form['Sleeping_avg_time_3']
        except: d['Sleeping_avg_time_3']=''
        try: d['Studying_total_time_3']=request.form['Studying_total_time_3']
        except: d['Studying_total_time_3']=''
        try: d['Studying_avg_time_3']=request.form['Studying_avg_time_3']
        except: d['Studying_avg_time_3']=''
        try: d['Leisure_total_time_3']=request.form['Leisure_total_time_3']
        except: d['Leisure_total_time_3']=''
        try: d['Leisure_avg_time_3']=request.form['Leisure_avg_time_3']
        except: d['Leisure_avg_time_3']=''
        try: d['Job_searching_total_time_3']=request.form['Job_searching_total_time_3']
        except: d['Job_searching_total_time_3']=''
        try: d['Job_searching_avg_time_3']=request.form['Job_searching_avg_time_3']
        except: d['Job_searching_avg_time_3']=''
        try: d['Household_work_total_time_3']=request.form['Household_work_total_time_3']
        except: d['Household_work_total_time_3']=''
        try: d['Household_work_avg_time_3']=request.form['Household_work_avg_time_3']
        except: d['Household_work_avg_time_3']=''
        try: d['Cooking_total_time_3']=request.form['Cooking_total_time_3']
        except: d['Cooking_total_time_3']=''
        try: d['Cooking_avg_time_3']=request.form['Cooking_avg_time_3']
        except: d['Cooking_avg_time_3']=''
        try: d['Utensils_clean_total_time_3']=request.form['Utensils_clean_total_time_3']
        except: d['Utensils_clean_total_time_3']=''
        try: d['Utensils_clean_avg_time_3']=request.form['Utensils_clean_avg_time_3']
        except: d['Utensils_clean_avg_time_3']=''
        try: d['Washing_clothes_total_time_3']=request.form['Washing_clothes_total_time_3']
        except: d['Washing_clothes_total_time_3']=''
        try: d['Washing_clothes_avg_time_3']=request.form['Washing_clothes_avg_time_3']
        except: d['Washing_clothes_avg_time_3']=''
        try: d['Ironing_clothes_total_time_3']=request.form['Ironing_clothes_total_time_3']
        except: d['Ironing_clothes_total_time_3']=''
        try: d['Ironing_clothes_avg_time_3']=request.form['Ironing_clothes_avg_time_3']
        except: d['Ironing_clothes_avg_time_3']=''
        try: d['Household_clean_total_time_3']=request.form['Household_clean_total_time_3']
        except: d['Household_clean_total_time_3']=''
        try: d['Household_clean_avg_time_3']=request.form['Household_clean_avg_time_3']
        except: d['Household_clean_avg_time_3']=''
        try: d['Teaching_children_total_time_3']=request.form['Teaching_children_total_time_3']
        except: d['Teaching_children_total_time_3']=''
        try: d['Teaching_children_avg_time_3']=request.form['Teaching_children_avg_time_3']
        except: d['Teaching_children_avg_time_3']=''
        try: d['Elderly_person_care_total_time_3']=request.form['Elderly_person_care_total_time_3']
        except: d['Elderly_person_care_total_time_3']=''
        try: d['Elderly_person_care_avg_time_3']=request.form['Elderly_person_care_avg_time_3']
        except: d['Elderly_person_care_avg_time_3']=''
        try: d['Shoping_total_time_3']=request.form['Shoping_total_time_3']
        except: d['Shoping_total_time_3']=''
        try: d['Shoping_avg_time_3']=request.form['Shoping_avg_time_3']
        except: d['Shoping_avg_time_3']=''
        try: d['Outside_time_total_time_3']=request.form['Outside_time_total_time_3']
        except: d['Outside_time_total_time_3']=''
        try: d['Outside_time_avg_time_3']=request.form['Outside_time_avg_time_3']
        except: d['Outside_time_avg_time_3']=''


        try: d['Self_Care_total_hr_4']=request.form['Self_Care_total_hr_4']
        except: d['Self_Care_total_hr_4']=''
        try: d['Self_Care_avg_hr_4']=request.form['Self_Care_avg_hr_4']
        except: d['Self_Care_avg_hr_4']=''
        try: d['Travel_total_hr_4']=request.form['Travel_total_hr_4']
        except: d['Travel_total_hr_4']=''
        try: d['Travel_avg_hr_4']=request.form['Travel_avg_hr_4']
        except: d['Travel_avg_hr_4']=''
        try: d['Work_total_time_4']=request.form['Work_total_time_4']
        except: d['Work_total_time_4']=''
        try: d['Work_avg_time_4']=request.form['Work_avg_time_4']
        except: d['Work_avg_time_4']=''
        try: d['Eating_total_time_4']=request.form['Eating_total_time_4']
        except: d['Eating_total_time_4']=''
        try: d['Eating_avg_time_4']=request.form['Eating_avg_time_4']
        except: d['Eating_avg_time_4']=''
        try: d['Sleeping_total_time_4']=request.form['Sleeping_total_time_4']
        except: d['Sleeping_total_time_4']=''
        try: d['Sleeping_avg_time_4']=request.form['Sleeping_avg_time_4']
        except: d['Sleeping_avg_time_4']=''
        try: d['Studying_total_time_4']=request.form['Studying_total_time_4']
        except: d['Studying_total_time_4']=''
        try: d['Studying_avg_time_4']=request.form['Studying_avg_time_4']
        except: d['Studying_avg_time_4']=''
        try: d['Leisure_total_time_4']=request.form['Leisure_total_time_4']
        except: d['Leisure_total_time_4']=''
        try: d['Leisure_avg_time_4']=request.form['Leisure_avg_time_4']
        except: d['Leisure_avg_time_4']=''
        try: d['Job_searching_total_time_4']=request.form['Job_searching_total_time_4']
        except: d['Job_searching_total_time_4']=''
        try: d['Job_searching_avg_time_4']=request.form['Job_searching_avg_time_4']
        except: d['Job_searching_avg_time_4']=''
        try: d['Household_work_total_time_4']=request.form['Household_work_total_time_4']
        except: d['Household_work_total_time_4']=''
        try: d['Household_work_avg_time_4']=request.form['Household_work_avg_time_4']
        except: d['Household_work_avg_time_4']=''
        try: d['Cooking_total_time_4']=request.form['Cooking_total_time_4']
        except: d['Cooking_total_time_4']=''
        try: d['Cooking_avg_time_4']=request.form['Cooking_avg_time_4']
        except: d['Cooking_avg_time_4']=''
        try: d['Utensils_clean_total_time_4']=request.form['Utensils_clean_total_time_4']
        except: d['Utensils_clean_total_time_4']=''
        try: d['Utensils_clean_avg_time_4']=request.form['Utensils_clean_avg_time_4']
        except: d['Utensils_clean_avg_time_4']=''
        try: d['Washing_clothes_total_time_4']=request.form['Washing_clothes_total_time_4']
        except: d['Washing_clothes_total_time_4']=''
        try: d['Washing_clothes_avg_time_4']=request.form['Washing_clothes_avg_time_4']
        except: d['Washing_clothes_avg_time_4']=''
        try: d['Ironing_clothes_total_time_4']=request.form['Ironing_clothes_total_time_4']
        except: d['Ironing_clothes_total_time_4']=''
        try: d['Ironing_clothes_avg_time_4']=request.form['Ironing_clothes_avg_time_4']
        except: d['Ironing_clothes_avg_time_4']=''
        try: d['Household_clean_total_time_4']=request.form['Household_clean_total_time_4']
        except: d['Household_clean_total_time_4']=''
        try: d['Household_clean_avg_time_4']=request.form['Household_clean_avg_time_4']
        except: d['Household_clean_avg_time_4']=''
        try: d['Teaching_children_total_time_4']=request.form['Teaching_children_total_time_4']
        except: d['Teaching_children_total_time_4']=''
        try: d['Teaching_children_avg_time_4']=request.form['Teaching_children_avg_time_4']
        except: d['Teaching_children_avg_time_4']=''
        try: d['Elderly_person_care_total_time_4']=request.form['Elderly_person_care_total_time_4']
        except: d['Elderly_person_care_total_time_4']=''
        try: d['Elderly_person_care_avg_time_4']=request.form['Elderly_person_care_avg_time_4']
        except: d['Elderly_person_care_avg_time_4']=''
        try: d['Shoping_total_time_4']=request.form['Shoping_total_time_4']
        except: d['Shoping_total_time_4']=''
        try: d['Shoping_avg_time_4']=request.form['Shoping_avg_time_4']
        except: d['Shoping_avg_time_4']=''
        try: d['Outside_time_total_time_4']=request.form['Outside_time_total_time_4']
        except: d['Outside_time_total_time_4']=''
        try: d['Outside_time_avg_time_4']=request.form['Outside_time_avg_time_4']
        except: d['Outside_time_avg_time_4']=''


        try: d['Self_Care_total_hr_5']=request.form['Self_Care_total_hr_5']
        except: d['Self_Care_total_hr_5']=''
        try: d['Self_Care_avg_hr_5']=request.form['Self_Care_avg_hr_5']
        except: d['Self_Care_avg_hr_5']=''
        try: d['Travel_total_hr_5']=request.form['Travel_total_hr_5']
        except: d['Travel_total_hr_5']=''
        try: d['Travel_avg_hr_5']=request.form['Travel_avg_hr_5']
        except: d['Travel_avg_hr_5']=''
        try: d['Work_total_time_5']=request.form['Work_total_time_5']
        except: d['Work_total_time_5']=''
        try: d['Work_avg_time_5']=request.form['Work_avg_time_5']
        except: d['Work_avg_time_5']=''
        try: d['Eating_total_time_5']=request.form['Eating_total_time_5']
        except: d['Eating_total_time_5']=''
        try: d['Eating_avg_time_5']=request.form['Eating_avg_time_5']
        except: d['Eating_avg_time_5']=''
        try: d['Sleeping_total_time_5']=request.form['Sleeping_total_time_5']
        except: d['Sleeping_total_time_5']=''
        try: d['Sleeping_avg_time_5']=request.form['Sleeping_avg_time_5']
        except: d['Sleeping_avg_time_5']=''
        try: d['Studying_total_time_5']=request.form['Studying_total_time_5']
        except: d['Studying_total_time_5']=''
        try: d['Studying_avg_time_5']=request.form['Studying_avg_time_5']
        except: d['Studying_avg_time_5']=''
        try: d['Leisure_total_time_5']=request.form['Leisure_total_time_5']
        except: d['Leisure_total_time_5']=''
        try: d['Leisure_avg_time_5']=request.form['Leisure_avg_time_5']
        except: d['Leisure_avg_time_5']=''
        try: d['Job_searching_total_time_5']=request.form['Job_searching_total_time_5']
        except: d['Job_searching_total_time_5']=''
        try: d['Job_searching_avg_time_5']=request.form['Job_searching_avg_time_5']
        except: d['Job_searching_avg_time_5']=''
        try: d['Household_work_total_time_5']=request.form['Household_work_total_time_5']
        except: d['Household_work_total_time_5']=''
        try: d['Household_work_avg_time_5']=request.form['Household_work_avg_time_5']
        except: d['Household_work_avg_time_5']=''
        try: d['Cooking_total_time_5']=request.form['Cooking_total_time_5']
        except: d['Cooking_total_time_5']=''
        try: d['Cooking_avg_time_5']=request.form['Cooking_avg_time_5']
        except: d['Cooking_avg_time_5']=''
        try: d['Utensils_clean_total_time_5']=request.form['Utensils_clean_total_time_5']
        except: d['Utensils_clean_total_time_5']=''
        try: d['Utensils_clean_avg_time_5']=request.form['Utensils_clean_avg_time_5']
        except: d['Utensils_clean_avg_time_5']=''
        try: d['Washing_clothes_total_time_5']=request.form['Washing_clothes_total_time_5']
        except: d['Washing_clothes_total_time_5']=''
        try: d['Washing_clothes_avg_time_5']=request.form['Washing_clothes_avg_time_5']
        except: d['Washing_clothes_avg_time_5']=''
        try: d['Ironing_clothes_total_time_5']=request.form['Ironing_clothes_total_time_5']
        except: d['Ironing_clothes_total_time_5']=''
        try: d['Ironing_clothes_avg_time_5']=request.form['Ironing_clothes_avg_time_5']
        except: d['Ironing_clothes_avg_time_5']=''
        try: d['Household_clean_total_time_5']=request.form['Household_clean_total_time_5']
        except: d['Household_clean_total_time_5']=''
        try: d['Household_clean_avg_time_5']=request.form['Household_clean_avg_time_5']
        except: d['Household_clean_avg_time_5']=''
        try: d['Teaching_children_total_time_5']=request.form['Teaching_children_total_time_5']
        except: d['Teaching_children_total_time_5']=''
        try: d['Teaching_children_avg_time_5']=request.form['Teaching_children_avg_time_5']
        except: d['Teaching_children_avg_time_5']=''
        try: d['Elderly_person_care_total_time_5']=request.form['Elderly_person_care_total_time_5']
        except: d['Elderly_person_care_total_time_5']=''
        try: d['Elderly_person_care_avg_time_5']=request.form['Elderly_person_care_avg_time_5']
        except: d['Elderly_person_care_avg_time_5']=''
        try: d['Shoping_total_time_5']=request.form['Shoping_total_time_5']
        except: d['Shoping_total_time_5']=''
        try: d['Shoping_avg_time_5']=request.form['Shoping_avg_time_5']
        except: d['Shoping_avg_time_5']=''
        try: d['Outside_time_total_time_5']=request.form['Outside_time_total_time_5']
        except: d['Outside_time_total_time_5']=''
        try: d['Outside_time_avg_time_5']=request.form['Outside_time_avg_time_5']
        except: d['Outside_time_avg_time_5']=''


        try: d['Self_Care_total_hr_6']=request.form['Self_Care_total_hr_6']
        except: d['Self_Care_total_hr_6']=''
        try: d['Self_Care_avg_hr_6']=request.form['Self_Care_avg_hr_6']
        except: d['Self_Care_avg_hr_6']=''
        try: d['Travel_total_hr_6']=request.form['Travel_total_hr_6']
        except: d['Travel_total_hr_6']=''
        try: d['Travel_avg_hr_6']=request.form['Travel_avg_hr_6']
        except: d['Travel_avg_hr_6']=''
        try: d['Work_total_time_6']=request.form['Work_total_time_6']
        except: d['Work_total_time_6']=''
        try: d['Work_avg_time_6']=request.form['Work_avg_time_6']
        except: d['Work_avg_time_6']=''
        try: d['Eating_total_time_6']=request.form['Eating_total_time_6']
        except: d['Eating_total_time_6']=''
        try: d['Eating_avg_time_6']=request.form['Eating_avg_time_6']
        except: d['Eating_avg_time_6']=''
        try: d['Sleeping_total_time_6']=request.form['Sleeping_total_time_6']
        except: d['Sleeping_total_time_6']=''
        try: d['Sleeping_avg_time_6']=request.form['Sleeping_avg_time_6']
        except: d['Sleeping_avg_time_6']=''
        try: d['Studying_total_time_6']=request.form['Studying_total_time_6']
        except: d['Studying_total_time_6']=''
        try: d['Studying_avg_time_6']=request.form['Studying_avg_time_6']
        except: d['Studying_avg_time_6']=''
        try: d['Leisure_total_time_6']=request.form['Leisure_total_time_6']
        except: d['Leisure_total_time_6']=''
        try: d['Leisure_avg_time_6']=request.form['Leisure_avg_time_6']
        except: d['Leisure_avg_time_6']=''
        try: d['Job_searching_total_time_6']=request.form['Job_searching_total_time_6']
        except: d['Job_searching_total_time_6']=''
        try: d['Job_searching_avg_time_6']=request.form['Job_searching_avg_time_6']
        except: d['Job_searching_avg_time_6']=''
        try: d['Household_work_total_time_6']=request.form['Household_work_total_time_6']
        except: d['Household_work_total_time_6']=''
        try: d['Household_work_avg_time_6']=request.form['Household_work_avg_time_6']
        except: d['Household_work_avg_time_6']=''
        try: d['Cooking_total_time_6']=request.form['Cooking_total_time_6']
        except: d['Cooking_total_time_6']=''
        try: d['Cooking_avg_time_6']=request.form['Cooking_avg_time_6']
        except: d['Cooking_avg_time_6']=''
        try: d['Utensils_clean_total_time_6']=request.form['Utensils_clean_total_time_6']
        except: d['Utensils_clean_total_time_6']=''
        try: d['Utensils_clean_avg_time_6']=request.form['Utensils_clean_avg_time_6']
        except: d['Utensils_clean_avg_time_6']=''
        try: d['Washing_clothes_total_time_6']=request.form['Washing_clothes_total_time_6']
        except: d['Washing_clothes_total_time_6']=''
        try: d['Washing_clothes_avg_time_6']=request.form['Washing_clothes_avg_time_6']
        except: d['Washing_clothes_avg_time_6']=''
        try: d['Ironing_clothes_total_time_6']=request.form['Ironing_clothes_total_time_6']
        except: d['Ironing_clothes_total_time_6']=''
        try: d['Ironing_clothes_avg_time_6']=request.form['Ironing_clothes_avg_time_6']
        except: d['Ironing_clothes_avg_time_6']=''
        try: d['Household_clean_total_time_6']=request.form['Household_clean_total_time_6']
        except: d['Household_clean_total_time_6']=''
        try: d['Household_clean_avg_time_6']=request.form['Household_clean_avg_time_6']
        except: d['Household_clean_avg_time_6']=''
        try: d['Teaching_children_total_time_6']=request.form['Teaching_children_total_time_6']
        except: d['Teaching_children_total_time_6']=''
        try: d['Teaching_children_avg_time_6']=request.form['Teaching_children_avg_time_6']
        except: d['Teaching_children_avg_time_6']=''
        try: d['Elderly_person_care_total_time_6']=request.form['Elderly_person_care_total_time_6']
        except: d['Elderly_person_care_total_time_6']=''
        try: d['Elderly_person_care_avg_time_6']=request.form['Elderly_person_care_avg_time_6']
        except: d['Elderly_person_care_avg_time_6']=''
        try: d['Shoping_total_time_6']=request.form['Shoping_total_time_6']
        except: d['Shoping_total_time_6']=''
        try: d['Shoping_avg_time_6']=request.form['Shoping_avg_time_6']
        except: d['Shoping_avg_time_6']=''
        try: d['Outside_time_total_time_6']=request.form['Outside_time_total_time_6']
        except: d['Outside_time_total_time_6']=''
        try: d['Outside_time_avg_time_6']=request.form['Outside_time_avg_time_6']
        except: d['Outside_time_avg_time_6']=''

        #23
        d['Preparing_food_activity']=request.form['Preparing_food_activity']
        d['Cleaning_food_activity']=request.form['Cleaning_food_activity']
        d['Cleaning_clothes_activity']=request.form['Cleaning_clothes_activity']
        d['Folding_clothes_activity']=request.form['Folding_clothes_activity']
        d['Ironing_clothes_activity']=request.form['Ironing_clothes_activity']
        d['Brooming_activity']=request.form['Brooming_activity']
        d['Mopping_activity']=request.form['Mopping_activity']
        d['Children_activity']=request.form['Children_activity']

        d['City_town_lockdown']=request.form['City_town_lockdown']
        d['Covid19_duration']=request.form['Covid19_duration']
        d['Covid19_after_effects']=str(request.form.getlist('Covid19_after_effects'))
        d['Economy_rise']=request.form['Economy_rise']
        d['Govt_measures']=str(request.form.getlist('Govt_measures'))
        d['Travel_will']=request.form['Travel_will']

        d['Primary_key']=encrypt(d['Email'])



        scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
        creds = ServiceAccountCredentials.from_json_keyfile_name("creds_1.json", scope)
        client = gspread.authorize(creds)
        sheet = client.open("General_Report").sheet1
        data = sheet.get_all_records()
        no_rows=len(data)

        insertRow = [d['Primary_key'],
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
                     d['Domestic_help_available'],
                     d['Preparing_food_activity'],
                     d['Cleaning_food_activity'],
                     d['Cleaning_clothes_activity'],
                     d['Folding_clothes_activity'],
                     d['Ironing_clothes_activity'],
                     d['Brooming_activity'],
                     d['Mopping_activity'],
                     d['Children_activity'],
                     d['City_town_lockdown'],
                     d['Covid19_duration'],
                     d['Covid19_after_effects'],
                     d['Economy_rise'],
                     d['Govt_measures'],
                     d['Travel_will']]



        sheet.insert_row(insertRow,no_rows+2)





        sheet = client.open("Individual_Report_1").sheet1
        data = sheet.get_all_records()
        no_rows=len(data)
        insertRow=[]
        No_of_member=int(d['Resident_1'])

        if No_of_member>=1: insertRow.extend( [d['Primary_key'],
                     d['Relationship_1'],
                     d['Age_1'],
                     d['Gender_1'],
                     d['Marital_Status_1'],
                     d['Employment_Status_1'],
                     d['Occupation_1'],
                     d['Industry_1'],
                     d['Education_1'],
                     d['Disability_1'],
                     d['Respondent_1'],
                     d['Work_from_home_1'],
                     d['Member_in_household_1'],
                     d['Temporary_in_household_1']])


        if No_of_member>=2: insertRow.extend( [d['Relationship_2'],
                     d['Age_2'],
                     d['Gender_2'],
                     d['Marital_Status_2'],
                     d['Employment_Status_2'],
                     d['Occupation_2'],
                     d['Industry_2'],
                     d['Education_2'],
                     d['Disability_2'],
                     d['Respondent_2'],
                     d['Work_from_home_2'],
                     d['Member_in_household_2'],
                     d['Temporary_in_household_2']])


        if No_of_member>=3: insertRow.extend( [d['Relationship_3'],
                     d['Age_3'],
                     d['Gender_3'],
                     d['Marital_Status_3'],
                     d['Employment_Status_3'],
                     d['Occupation_3'],
                     d['Industry_3'],
                     d['Education_3'],
                     d['Disability_3'],
                     d['Respondent_3'],
                     d['Work_from_home_3'],
                     d['Member_in_household_3'],
                     d['Temporary_in_household_3']])

        if No_of_member>=4: insertRow.extend( [d['Relationship_4'],
                     d['Age_4'],
                     d['Gender_4'],
                     d['Marital_Status_4'],
                     d['Employment_Status_4'],
                     d['Occupation_4'],
                     d['Industry_4'],
                     d['Education_4'],
                     d['Disability_4'],
                     d['Respondent_4'],
                     d['Work_from_home_4'],
                     d['Member_in_household_4'],
                     d['Temporary_in_household_4']])


        if No_of_member>=5: insertRow.extend( [d['Relationship_5'],
                     d['Age_5'],
                     d['Gender_5'],
                     d['Marital_Status_5'],
                     d['Employment_Status_5'],
                     d['Occupation_5'],
                     d['Industry_5'],
                     d['Education_5'],
                     d['Disability_5'],
                     d['Respondent_5'],
                     d['Work_from_home_5'],
                     d['Member_in_household_5'],
                     d['Temporary_in_household_5']])


        if No_of_member>=6: insertRow.extend( [d['Relationship_6'],
                     d['Age_6'],
                     d['Gender_6'],
                     d['Marital_Status_6'],
                     d['Employment_Status_6'],
                     d['Occupation_6'],
                     d['Industry_6'],
                     d['Education_6'],
                     d['Disability_6'],
                     d['Respondent_6'],
                     d['Work_from_home_6'],
                     d['Member_in_household_6'],
                     d['Temporary_in_household_6']])



        sheet.insert_row(insertRow,no_rows+2)




        sheet = client.open("Individual_Report_2").sheet1
        data = sheet.get_all_records()
        no_rows=len(data)
        insertRow=[]
        No_of_member=int(d['Resident_1'])

        if No_of_member>=1: insertRow.extend( [ d['Primary_key'],
                     d['Self_Care_total_hr_1'],
                     d['Self_Care_avg_hr_1'],
                     d['Travel_total_hr_1'],
                     d['Travel_avg_hr_1'],
                     d['Work_total_time_1'],
                     d['Work_avg_time_1'],
                     d['Eating_total_time_1'],
                     d['Eating_avg_time_1'],
                     d['Sleeping_total_time_1'],
                     d['Sleeping_avg_time_1'],
                     d['Studying_total_time_1'],
                     d['Studying_avg_time_1'],
                     d['Leisure_total_time_1'],
                     d['Leisure_avg_time_1'],
                     d['Job_searching_total_time_1'],
                     d['Job_searching_avg_time_1'],
                     d['Household_work_total_time_1'],
                     d['Household_work_avg_time_1'],
                     d['Cooking_total_time_1'],
                     d['Cooking_avg_time_1'],
                     d['Utensils_clean_total_time_1'],
                     d['Utensils_clean_avg_time_1'],
                     d['Washing_clothes_total_time_1'],
                     d['Washing_clothes_avg_time_1'],
                     d['Ironing_clothes_total_time_1'],
                     d['Ironing_clothes_avg_time_1'],
                     d['Household_clean_total_time_1'],
                     d['Household_clean_avg_time_1'],
                     d['Teaching_children_total_time_1'],
                     d['Teaching_children_avg_time_1'],
                     d['Elderly_person_care_total_time_1'],
                     d['Elderly_person_care_avg_time_1'],
                     d['Shoping_total_time_1'],
                     d['Shoping_avg_time_1'],
                     d['Outside_time_total_time_1'],
                     d['Outside_time_avg_time_1']])

        if No_of_member>=2: insertRow.extend( [ d['Self_Care_total_hr_2'],
                     d['Self_Care_avg_hr_2'],
                     d['Travel_total_hr_2'],
                     d['Travel_avg_hr_2'],
                     d['Work_total_time_2'],
                     d['Work_avg_time_2'],
                     d['Eating_total_time_2'],
                     d['Eating_avg_time_2'],
                     d['Sleeping_total_time_2'],
                     d['Sleeping_avg_time_2'],
                     d['Studying_total_time_2'],
                     d['Studying_avg_time_2'],
                     d['Leisure_total_time_2'],
                     d['Leisure_avg_time_2'],
                     d['Job_searching_total_time_2'],
                     d['Job_searching_avg_time_2'],
                     d['Household_work_total_time_2'],
                     d['Household_work_avg_time_2'],
                     d['Cooking_total_time_2'],
                     d['Cooking_avg_time_2'],
                     d['Utensils_clean_total_time_2'],
                     d['Utensils_clean_avg_time_2'],
                     d['Washing_clothes_total_time_2'],
                     d['Washing_clothes_avg_time_2'],
                     d['Ironing_clothes_total_time_2'],
                     d['Ironing_clothes_avg_time_2'],
                     d['Household_clean_total_time_2'],
                     d['Household_clean_avg_time_2'],
                     d['Teaching_children_total_time_2'],
                     d['Teaching_children_avg_time_2'],
                     d['Elderly_person_care_total_time_2'],
                     d['Elderly_person_care_avg_time_2'],
                     d['Shoping_total_time_2'],
                     d['Shoping_avg_time_2'],
                     d['Outside_time_total_time_2'],
                     d['Outside_time_avg_time_2']])


        if No_of_member>=3: insertRow.extend( [ d['Self_Care_total_hr_3'],
                     d['Self_Care_avg_hr_3'],
                     d['Travel_total_hr_3'],
                     d['Travel_avg_hr_3'],
                     d['Work_total_time_3'],
                     d['Work_avg_time_3'],
                     d['Eating_total_time_3'],
                     d['Eating_avg_time_3'],
                     d['Sleeping_total_time_3'],
                     d['Sleeping_avg_time_3'],
                     d['Studying_total_time_3'],
                     d['Studying_avg_time_3'],
                     d['Leisure_total_time_3'],
                     d['Leisure_avg_time_3'],
                     d['Job_searching_total_time_3'],
                     d['Job_searching_avg_time_3'],
                     d['Household_work_total_time_3'],
                     d['Household_work_avg_time_3'],
                     d['Cooking_total_time_3'],
                     d['Cooking_avg_time_3'],
                     d['Utensils_clean_total_time_3'],
                     d['Utensils_clean_avg_time_3'],
                     d['Washing_clothes_total_time_3'],
                     d['Washing_clothes_avg_time_3'],
                     d['Ironing_clothes_total_time_3'],
                     d['Ironing_clothes_avg_time_3'],
                     d['Household_clean_total_time_3'],
                     d['Household_clean_avg_time_3'],
                     d['Teaching_children_total_time_3'],
                     d['Teaching_children_avg_time_3'],
                     d['Elderly_person_care_total_time_3'],
                     d['Elderly_person_care_avg_time_3'],
                     d['Shoping_total_time_3'],
                     d['Shoping_avg_time_3'],
                     d['Outside_time_total_time_3'],
                     d['Outside_time_avg_time_3']])


        if No_of_member>=4: insertRow.extend( [ d['Self_Care_total_hr_4'],
                     d['Self_Care_avg_hr_4'],
                     d['Travel_total_hr_4'],
                     d['Travel_avg_hr_4'],
                     d['Work_total_time_4'],
                     d['Work_avg_time_4'],
                     d['Eating_total_time_4'],
                     d['Eating_avg_time_4'],
                     d['Sleeping_total_time_4'],
                     d['Sleeping_avg_time_4'],
                     d['Studying_total_time_4'],
                     d['Studying_avg_time_4'],
                     d['Leisure_total_time_4'],
                     d['Leisure_avg_time_4'],
                     d['Job_searching_total_time_4'],
                     d['Job_searching_avg_time_4'],
                     d['Household_work_total_time_4'],
                     d['Household_work_avg_time_4'],
                     d['Cooking_total_time_4'],
                     d['Cooking_avg_time_4'],
                     d['Utensils_clean_total_time_4'],
                     d['Utensils_clean_avg_time_4'],
                     d['Washing_clothes_total_time_4'],
                     d['Washing_clothes_avg_time_4'],
                     d['Ironing_clothes_total_time_4'],
                     d['Ironing_clothes_avg_time_4'],
                     d['Household_clean_total_time_4'],
                     d['Household_clean_avg_time_4'],
                     d['Teaching_children_total_time_4'],
                     d['Teaching_children_avg_time_4'],
                     d['Elderly_person_care_total_time_4'],
                     d['Elderly_person_care_avg_time_4'],
                     d['Shoping_total_time_4'],
                     d['Shoping_avg_time_4'],
                     d['Outside_time_total_time_4'],
                     d['Outside_time_avg_time_4']])


        if No_of_member>=5: insertRow.extend( [ d['Self_Care_total_hr_5'],
                     d['Self_Care_avg_hr_5'],
                     d['Travel_total_hr_5'],
                     d['Travel_avg_hr_5'],
                     d['Work_total_time_5'],
                     d['Work_avg_time_5'],
                     d['Eating_total_time_5'],
                     d['Eating_avg_time_5'],
                     d['Sleeping_total_time_5'],
                     d['Sleeping_avg_time_5'],
                     d['Studying_total_time_5'],
                     d['Studying_avg_time_5'],
                     d['Leisure_total_time_5'],
                     d['Leisure_avg_time_5'],
                     d['Job_searching_total_time_5'],
                     d['Job_searching_avg_time_5'],
                     d['Household_work_total_time_5'],
                     d['Household_work_avg_time_5'],
                     d['Cooking_total_time_5'],
                     d['Cooking_avg_time_5'],
                     d['Utensils_clean_total_time_5'],
                     d['Utensils_clean_avg_time_5'],
                     d['Washing_clothes_total_time_5'],
                     d['Washing_clothes_avg_time_5'],
                     d['Ironing_clothes_total_time_5'],
                     d['Ironing_clothes_avg_time_5'],
                     d['Household_clean_total_time_5'],
                     d['Household_clean_avg_time_5'],
                     d['Teaching_children_total_time_5'],
                     d['Teaching_children_avg_time_5'],
                     d['Elderly_person_care_total_time_5'],
                     d['Elderly_person_care_avg_time_5'],
                     d['Shoping_total_time_5'],
                     d['Shoping_avg_time_5'],
                     d['Outside_time_total_time_5'],
                     d['Outside_time_avg_time_5']])


        if No_of_member>=6: insertRow.extend( [ d['Self_Care_total_hr_6'],
                     d['Self_Care_avg_hr_6'],
                     d['Travel_total_hr_6'],
                     d['Travel_avg_hr_6'],
                     d['Work_total_time_6'],
                     d['Work_avg_time_6'],
                     d['Eating_total_time_6'],
                     d['Eating_avg_time_6'],
                     d['Sleeping_total_time_6'],
                     d['Sleeping_avg_time_6'],
                     d['Studying_total_time_6'],
                     d['Studying_avg_time_6'],
                     d['Leisure_total_time_6'],
                     d['Leisure_avg_time_6'],
                     d['Job_searching_total_time_6'],
                     d['Job_searching_avg_time_6'],
                     d['Household_work_total_time_6'],
                     d['Household_work_avg_time_6'],
                     d['Cooking_total_time_6'],
                     d['Cooking_avg_time_6'],
                     d['Utensils_clean_total_time_6'],
                     d['Utensils_clean_avg_time_6'],
                     d['Washing_clothes_total_time_6'],
                     d['Washing_clothes_avg_time_6'],
                     d['Ironing_clothes_total_time_6'],
                     d['Ironing_clothes_avg_time_6'],
                     d['Household_clean_total_time_6'],
                     d['Household_clean_avg_time_6'],
                     d['Teaching_children_total_time_6'],
                     d['Teaching_children_avg_time_6'],
                     d['Elderly_person_care_total_time_6'],
                     d['Elderly_person_care_avg_time_6'],
                     d['Shoping_total_time_6'],
                     d['Shoping_avg_time_6'],
                     d['Outside_time_total_time_6'],
                     d['Outside_time_avg_time_6']])




        sheet.insert_row(insertRow,no_rows+2)


        sheet = client.open("Meta_Report").sheet1
        data = sheet.get_all_records()
        no_rows=len(data)

        IP=str(request.remote_addr)

        insertRow=[d['Primary_key'],
                   START_TIME,
                   END_TIME,
                   IP]




        sheet.insert_row(insertRow,no_rows+2)

        sheet = client.open("Encrypt_Report").sheet1
        data = sheet.get_all_records()
        no_rows=len(data)

        IP=str(request.remote_addr)

        insertRow=[d['Primary_key'],
                   d['Email']]




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

        d['Primary_key']=str(datetime.datetime.now())

        scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
        creds = ServiceAccountCredentials.from_json_keyfile_name("creds_1.json", scope)
        client = gspread.authorize(creds)
        sheet = client.open("Disagree_Report").sheet1
        data = sheet.get_all_records()
        no_rows=len(data)

        insertRow=[d['Primary_key'],
                   d['Resident_1'],
                   d['Resident_2'],
                   d['Income'],
                   d['Reason']]



        sheet.insert_row(insertRow,no_rows+2)

        return render_template('submit_disagree.html')

    else:
        return redirect('/')

if __name__=='__main__':
    app.run(debug=True)
