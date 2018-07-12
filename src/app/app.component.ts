import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  json ={
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
}
