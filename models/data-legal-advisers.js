var search = [

  {
    "id": 1,
    "personal-details": {
      "title":      "Mr",
      "firstname":  "David",
      "lastname":   "Francis",
      "dob":        "1972-04-04",
      "age":        "45",
      "gender":     "Male",
      "urn":        "90123861",
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
      "notice-served": "2016-11-15",
    },
    "offence": {
      "title": "Public service vehicle &ndash; passenger used ticket issued for another person",
      "date": "2016-02-18",
      "offence-wording": "On 10 Nov 2016 at Belmont Hill, Lewisham, SE13, being a passenger on a Public Services Vehicle being operated on behalf of London Bus Company Limited , used for the carriage of passengers at separate fares, used a ticket which had been issued for use by another person on terms that it was not transferable. Contrary to regulation 7(1)(b) of the Public Service Vehicles (Conduct of Drivers, Inspectors, Conductors and Passengers) Regulations 1990 and section 25 of the Public Passenger Vehicles Act 1981",
      "statement-of-facts": "On Thursday 10th November 2016 you were on board a route 178 bus, garage code 552 with the intention of travelling from LEWISHAM to BLACKHEATH, a normal adult fare of &pound;2.40. During the course of this journey at about 4:15 PM you offered for the inspection of London Bus Inspector LB004512 a &pound;3.60 Discount SINGLE Pay as you go pass in oystercard format, serial number 02871229561, which had been issued to another person on terms that it was not transferable and was therefore not valid for travel by you. When questioned, you said &ldquo;It&rsquo;s my wife&rsquo;s&rdquo;. When informed that you were being reported you said &ldquo;It&rsquo;s not fair, nobody told me I couldn&rsquo;t use someone else&rsquo;s oystercard",
      "witness-statement": "This statement is compiled from original notes made at 4:45 on 10 Nov 2016. On Thursday 10th November 2016 at 4:15 PM I was on duty in uniform at LEWISHAM HIGH ST, SE13 when I ticket checked a route 178 bus, garage code 552 on a journey in service to Woolwich. On boarding, the OYSTER CARD READERS WERE CHECKED. I approached a male passenger sitting on the upper deck, who I now know to be Mr David Francis of 6 Blessington Road, SE13, who was taking a journey from LEWISHAM to BLACKHEATH, a fare of £2.40. Mr Francis offered for inspection a £3.60 Discount SINGLE Pay as you go pass in oystercard format, serial number 02871229561. I observed that this pass was being shown without a valid photocard. I sealed this in evidence bag 46390 marked exhibit LO/1, which I now offer in evidence. I said to Mr Francis, &ldquo;is this the pass you are using for your journey?&rdquo;. He said &ldquo;Yes&rdquo;. I said, &ldquo;Do you have the photocard for this pass. These passes are not transferrable&rdquo;. He said &ldquo;It's my wife&rsquo;s&rdquo;. I asked him for his name and address, which he gave as Mr David Francis, 6 Blessington Road, Lewisham, London, SE13 5EB. These details were verified by voters check. I said &ldquo;I am withdrawing this OYSTER and I will be submitting a report to the Transport For London Prosecutions Team for their consideration. He said &ldquo;It&rsquo;s not fair, nobody told me I couldn&rsquo;t use someone else&rsquo;s oystercard&ldquo;",
      "mitigation": "",
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
      "compensation": "2.40",
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
