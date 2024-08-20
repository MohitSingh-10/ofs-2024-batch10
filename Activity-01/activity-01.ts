/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from 'knockout';
import "oj-c/input-text";
import "ojs/ojknockout";
import 'oj-c/input-password';
import { ojDatePicker } from 'ojs/ojdatetimepicker';
import 'ojs/ojdatetimepicker';
import "oj-c/radioset";
import 'oj-c/checkboxset';
import 'oj-c/select-single';
import 'ojs/ojprogress-bar';
import "oj-c/button";


class Activity {
    name : ko.Observable<string>;
    pswd : ko.Observable<string>;
    date : ko.Observable<string>;
    // dateValue : ko.Computed<string>;
    gender : Array<{value: string; label: string}>;
    genderValue : ko.Observable<string>;
    subject : Array<{value: string; label: string}>;
    subjectValue : ko.Observable<string>;
    education : Array<{value: string; label: string}>;
    educationValue : ko.Observable<string>;
    // activatedButton : ko.Observable<string>;
    step : ko.Observable<number>;
    progressValue = ko.pureComputed(() => {
        return Math.min(this.step(), 100);
      });

    constructor(){
        this.name = ko.observable("");
        this.pswd = ko.observable("");
        this.date = ko.observable('2022-12-20T10:00:00Z');
        // this.dateValue = ko.computed(()=>{
        //     const dateStr = this.date.toString;
        //     const val = dateStr.substring(0, 11);
        //     return  val;
        // })
        this.genderValue = ko.observable("")
        this.gender = [
            {value: "male", label: "Male"},
            {value: "female", label: "Female"},
        ]

        this.subject = [
            {value: " Physics", label: "phy"},
            {value: " Chemistry", label: "chem"},
            {value: " Maths", label: "math"},
            {value: " Biology", label: "bio"},
            {value: " Computer Science", label: "comp"}
        ]
        this.subjectValue = ko.observable("");

        this.education = [
            {value: "X", label: "10th"},
            {value: "XII", label: "12th"},
            {value: "Under-Graduate", label: "UG"},
            {value: "Post-Graduate", label: "PG"}
        ]

        this.educationValue = ko.observable("");

        // this.activatedButton = ko.observable("(Not activated yet)");
        this.step = ko.observable(0);
        window.setInterval(() => {
            this.step((this.step() + 1) % 200);
          }, 30);
        
        
    }
    public buttonClick = (event : Event) =>{
        alert("Hello World");
        return true;
    }
}


export = Activity;