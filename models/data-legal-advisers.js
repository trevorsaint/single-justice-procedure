var search = [

  {
    "id": 1,
    "personal-details": {
      "title":      "Mr",
      "firstname":  "Billy",
      "lastname":   "Smith",
      "dob":        "1970-04-04",
      "age":        "46",
      "gender":     "Male",
      "urn":        "9012466",
      "address": {
        "address1": "7 Rock Road",
        "address2": "",
        "town":     "London",
        "postcode": "SE3 8YH"
      },
      "email":      "",
      "phone":      "",
      "mobile":     ""
    },
    "case-details": {
      "status":        "No plea received",
      "prosecutor":    "Transport for London",
      "charge-date":   "2016-01-21",
      "notice-served": "2016-09-30",
    },
    "offence": {
      "title": "Passenger used ticket issued for another person",
      "date": "2016-02-18",
      "statement-of-facts": "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;&hellip; <a href=\"#\">More</a>",
      "mitigation": "I picked up my partner&rsquo;s ticket instead of my own when I left my house.",
      "plea": "No plea received",
      "decision": "Financial penalty",
      "collection-order-confirmed": "true",
      "reason-for-deducting-from-benefits": "Compensation ordered",
      "reason-for-attaching-to-earnings": "Compensation ordered",
      "payment-method": "Pay direct to court",
      "reserve-terms": "Lump sum within 14 days",
      "defendant-pay": "Lump sum within 14 days",
      "reason-for-not-deducting-from-benefits": "No information from the defendant",
      "reason-for-deducting-from-benefits": "Compensation ordered",
      "weekly-income-assumed": "440",
      "fine-band-applied": "Band A",
      "fine": "220",
      "compensation": "3.12",
      "cost": "125",
      "surcharge": "30"
    },
    "employment": {
      "status":                    "Employed",
      "national-insurance-number": "LC 59 17 17 B",
      "employer-name":             "Ministry of Justice",
      "employee-number":           "e902938480",
      "employer-address": {
        "address1": "102 Petty France",
        "address2": "",
        "town":     "London",
        "postcode": "SW1H 9AJ"
      },
      "employer-telephone":        "020 3334 3555",
      "pay": {
        "frequency": "",
        "amount":    ""
      },
      "receiving-benefits": "",
    },
    "related-documents": {
      "document": [
        {
          "title":      "SJP notice",
          "file-type":  "PDF",
          "file-size":  "256KB",
          "file-pages": "3 pages",
          "file-path":  "/legal-adviser/documents/"
        },
        {
          "title":      "previous convictions",
          "file-type":  "PDF",
          "file-size":  "514KB",
          "file-pages": "2 pages",
          "file-path":  "/legal-adviser/documents/"
        },
        {
          "title":      "statement of income and outgoings (MC100)",
          "file-type":  "PDF",
          "file-size":  "256KB",
          "file-pages": "3 pages",
          "file-path":  "/legal-adviser/documents/"
        }
      ]
    }
  }

];

exports.getSearchEntries = function() {
  return search;
}

exports.getSearchEntry = function(id) {
  for(var i=0; i < search.length; i++) {
    if(search[i].id == id) return search[i];
  }
}
