from flask import Flask,render_template,request,redirect
import pandas as pd

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit',methods=['POST','GET'])
def submit():
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
        d['Appliances']=request.form['Appliances']
        d['Daycare_hrs']=request.form['Daycare_hrs']
        d['Laundry']=request.form['Laundry']
        d['Driver']=request.form['Driver']
        d['Driver_use']=request.form['Driver_use']

        #df=pd.DataFrame.from_dict(d,index=[i for i in range()])
        #df.to_csv('data.csv',index=False)

        f=open('file.txt','w')
        for i in d:
            f.write(str(i)+'-'+str(d[i])+'\n')
        f.close()

        return render_template('submit.html')

    else:
        return redirect('/')



if __name__=='__main__':
    app.run(debug=True)
