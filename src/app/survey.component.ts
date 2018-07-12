import { Component, Input, OnInit , SimpleChanges  } from "@angular/core";
import * as Survey from 'survey-angular'
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.imagepicker(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
  })
export class SurveyComponent implements OnInit{
  
  // @Input()
  // set json(value: object) {
  //   const surveyModel = new Survey.Model(value);
  //   surveyModel.onAfterRenderQuestion.add((survey, options) => {
  //     if (!options.question.popupdescription) return;

  //     //Add a button;
  //     var btn = document.createElement("button");
  //     btn.className = "btn btn-info btn-xs";
  //     btn.innerHTML = "More Info";
  //     var question = options.question;
  //     btn.onclick = function() {
  //       //showDescription(question);
  //       alert(options.question.popupdescription);
  //     };
  //     var header = options.htmlElement.querySelector("h5");
  //     var span = document.createElement("span");
  //     span.innerHTML = "  ";
  //     header.appendChild(span);
  //     header.appendChild(btn);
  //   });
  //   Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  // }

  public surveyjson ={
    "title": "POC Patient Feedback",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "Do you love Ampath?",
        "title": "Do you love Ampath",
        "isRequired": true,
        "choices": [
         "Yes",
         "No",
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "matrix",
        "name": "Quality",
        "title": "Please indicate if you agree or disagree with the following statements",
        "isRequired": true,
        "columns": [
         {
          "value": 1,
          "text": "Strongly Disagree"
         },
         {
          "value": 2,
          "text": "Disagree"
         },
         {
          "value": 3,
          "text": "Neutral"
         },
         {
          "value": 4,
          "text": "Agree"
         },
         {
          "value": 5,
          "text": "Strongly Agree"
         }
        ],
        "rows": [
         {
          "value": "affordable",
          "text": "Product is affordable"
         },
         {
          "value": "does what it claims",
          "text": "Product does what it claims"
         },
         {
          "value": "better then others",
          "text": "Product is better than other products on the market"
         },
         {
          "value": "easy to use",
          "text": "Product is easy to use"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "price to competitors",
        "title": "Compared to our competitors, do you feel the Product is",
        "choices": [
         "Less expensive",
         "Priced about the same",
         "More expensive",
         "Not sure"
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "checkbox",
        "name": "question1",
        "title": "What do you Think",
        "isRequired": true,
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       }
      ],
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "dropdown",
        "name": "question2",
        "title": "Choose",
        "isRequired": true,
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       }
      ]
     }
    ],
    "showProgressBar": "bottom"
   }

  

  ngOnInit() {    
    this.createSurvey ();
  }

  public createSurvey () {
    const surveyModel = new Survey.Model(this.surveyjson);
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

  }

}
