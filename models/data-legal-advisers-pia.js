var search = [

  {
    "id": 1,
    "personal-details": {
      "title":      "Mr",
      "firstname":  "David",
      "lastname":   "Francis",
      "dob":        "1972-11-18",
      "age":        "45",
      "gender":     "Male",
      "urn":        "9012386",
      "address": {
        "address1": "6 Blessington Road",
        "address2": "Lewisham",
        "town":     "London",
        "postcode": "SE13 5EB"
      },
      "email":      "",
      "phone":      "",
      "mobile":     ""
    },
    "case-details": {
      "status":        "No plea received",
      "prosecutor":    "Transport for London",
      "charge-date":   "2016-01-21",
      "notice-served": "2016-11-02",
    },
    "offence": {
      "title": "Passenger used ticket issued for another person",
      "date": "2016-02-18",
      "offence-wording": "On 10 Nov 2016 at Belmont Hill, Lewisham, SE13, being a passenger on a Public Services Vehicle being operated on behalf of London Bus Company Limited , used for the carriage of passengers at separate fares, used a ticket which had been issued for use by another person on terms that it was not transferable. Contrary to regulation 7(1)(b) of the Public Service Vehicles (Conduct of Drivers, Inspectors, Conductors and Passengers) Regulations 1990 and section 25 of the Public Passenger Vehicles Act 1981",
      "statement-of-facts": "On Thursday 10th November 2016 you were on board a route 178 bus, garage code 552 with the intention of travelling from LEWISHAM to BLACKHEATH, a normal adult fare of &pound;2.40. During the course of this journey at about 4:15 PM you offered for the inspection of London Bus Inspector LB004512 a &pound;3.60 Discount SINGLE Pay as you go pass in oystercard format, serial number 02871229561, which had been issued to another person on terms that it was not transferable and was therefore not valid for travel by you. When questioned, you said &ldquo;It&rsquo;s my wife&rsquo;s&rdquo;. When informed that you were being reported you said &ldquo;It&rsquo;s not fair, nobody told me I couldn&rsquo;t use someone else&rsquo;s oystercard",
      "mitigation": "",
      "plea": "No plea received",
      "verdict": "Proved <abbr title=\"Single Justice Procedure\">SJP</abbr>",
      "decision": "Financial penalty",
      "collection-order-confirmed": "true",
      "reason-for-deducting-from-benefits": "Compensation ordered",
      "reason-for-attaching-to-earnings": "Compensation ordered",
      "payment-method": "Pay direct to court",
      "reserve-terms": "Lump sum within 14 days",
      "defendant-pay": "Lump sum within 14 days",
      "reason-for-not-deducting-from-benefits": "No information from the defendant",
      "reason-for-deducting-from-benefits": "Compensation ordered",
      "weekly-income": "440",
      "weekly-income-assumed": true,
      "fine-band-applied": "Band A",
      "fine": "220",
      "compensation": "2.40",
      "cost": "125",
      "surcharge": "30",
      "previous-convictions": {
        "convictions": 2
      }
    },
    "related-documents": {
      "document": [
        {
          "title":      "SJP notice",
          "file-type":  "PDF",
          "file-size":  "315KB",
          "file-pages": "4 pages",
          "file-path":  "#"
        },
        {
          "title":      "previous convictions",
          "file-type":  "PDF",
          "file-size":  "232KB",
          "file-pages": "2 page",
          "file-path":  "#"
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
