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
    completedHtml: "<p>Thank you for your feedback</p><br><br>\n\n<p>Please hand the tablet back to the clinic staff</p>\n<br><br><br><br><br><br><br><br><br>\n<a href='/location'>start new survey</a>",
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "rating",
        name: "question1",
        title: "How likely is it that you would recommend this clinic to a family member or friend?",
        rateMax: 10,
        minRateDescription: "not likely",
        maxRateDescription: "very likely"
       }
      ],
      navigationButtonsVisibility: "show"
     },
     {
      name: "page2",
      elements: [
       {
        type: "checkbox",
        name: "question2",
        choices: [
         "item1",
         "item2",
         "item3"
        ]
       }
      ],
      visibleIf: "{question1} <= 8"
     },
     {
      name: "page3",
      elements: [
       {
        type: "checkbox",
        name: "question3",
        choices: [
         "item1",
         "item2",
         "item3"
        ]
       }
      ],
      visibleIf: "{question1} >= 9"
     }
    ],
    showProgressBar: "bottom"
   }
  

  ngOnInit() {    
    this.createSurvey ();
  }

  public createSurvey () {
    const surveyModel = new Survey.Model(this.surveyjson);
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

  }

}
