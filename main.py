from flask import Flask,render_template,request,redirect
import pandas as pd

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

        return render_template('submit_agree.html')

    else:
        return redirect('/')



@app.route('/submit_disagree',methods=['POST','GET'])
def submit_disagree():
    return render_template('submit_disagree.html')


if __name__=='__main__':
    app.run(debug=True)
