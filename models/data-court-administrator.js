var search = [

  {
    "id": 1,
    "title": "Mr",
    "firstname": "Billy",
    "lastname": "Smith",
    "dob": "1970-04-04",
    "age": "46",
    "gender": "Male",
    "urn": "9012466",
    "address": {
      "address1": "7 Rock Road",
      "address2": "",
      "town": "London",
      "postcode": "SE3 8YH"
    },
    "email": "",
    "phone": "",
    "mobile": "",
    "national-insurance-number": "",
    "case-details": {
      "status": "Awaiting plea",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-04-30",
    },
    "offence": {
      "title": "Passenger used ticket issued for another person",
      "date": "2016-02-18",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Awaiting plea"
    },
    "employment": {
      "status": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "",
    },
    "files": {
      "file": [
        {
          "csv": true,
          "uploaded": "2016-05-10",
          "time": "9:32am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status": "Being checked",
          "url": ""
        },
        {
          "csv": true,
          "uploaded": "2016-05-09",
          "time": "2:57pm",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status":   '<span class="text-error">Rejected &ndash; errors found</span>',
          "url":      "check-csv-uploads/report/errors/1"
        },
        {
          "csv": true,
          "uploaded": "2016-05-09",
          "time": "2:57pm",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status":   'Sent to court',
          "url":      "check-csv-uploads/report/success/1"
        },
        {
          "csv": true,
          "uploaded": "2016-05-09",
          "time": "10:14am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status":   'Sent to court',
          "url":      "check-csv-uploads/report/success/1"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 2,
    "title": "Miss",
    "firstname": "Tegan",
    "lastname": "Smith",
    "dob": "1972-10-19",
    "age": "43",
    "gender": "Male",
    "urn": "9012467",
    "address": {
      "address1": "29 Newport Road",
      "town": "Carnbo",
      "postcode": "KY13 4GX"
    },
    "email": "tegan.smith@gmail.com",
    "phone": "078 2400 2563",
    "national-insurance-number": "ZK 89 01 41 A",
    "hearing": "2015-11-18",
    "case-details": {
      "status": 'Completed &ndash; decision sent to defendant',
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-09-18",
      "court-decision": 1
    },
    "offence": {
      "title": "Passenger used ticket issued for another person",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Pleaded guilty"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "frequency-income": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "Yes",
    },
    "files": {
      "file": [
        {
          "csv": true,
          "uploaded": "2016-05-10",
          "time": "10:57am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status":   '<span class="text-error">Rejected &ndash; errors found</span>',
          "url":      "check-csv-uploads/report/errors/2"
        },
        {
          "csv": true,
          "uploaded": "2016-05-09",
          "time": "9:32am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status": "Being checked",
          "url": ""
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": true,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": true,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": true,
          "id": "witness-statement",
          "name": "witnessStatement",
          "title": "witness statement",
          "file-type": "PDF",
          "file-size": "856KB",
          "file-pages": "12 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": true,
          "id": "orders",
          "name": "orders",
          "title": "orders",
          "file-type": "PDF",
          "file-size": "125KB",
          "file-pages": "2 pages",
          "file-uploaded-date": "2016-10-07",
          "file-path": "#",
          "printed-for-posting": "Printed for posting 7 Oct 2016",
          "printed-for-posting-iso": "2016-10-07",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 3,
    "title": "Mrs",
    "firstname": "Za",
    "lastname": "Smith",
    "dob": "1941-10-11",
    "age": "74",
    "gender": "Female",
    "urn": "9012462",
    "address": {
      "address1": "92 Sloe Lane",
      "town": "Crouch",
      "postcode": "TN15 6GQ"
    },
    "email": "za.smith@gmail.com",
    "phone": "078 1825 3550",
    "national-insurance-number": "GK 69 85 94 D",
    "case-details": {
      "status": "Decision made",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-07-13",
      "court-decision": 2
    },
    "offence": {
      "title": "Having failed to pay rail fare gave false particulars",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Pleaded guilty",
    },
    "employment": {
      "status": "",
      "since-date": "",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "frequency-income": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "",
    },
    "files": {
      "file": [
        {
          "document": true,
          "uploaded": "9 May 2016",
          "ISO-8601": "2016-05-09",
          "time": "11:52am",
          "filename": "case-123456789",
          "filetype": "Zip",
          "status":   '<span class="text-error">4 errors found</span>',
          "url":      "check-document-uploads/report/errors/3"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": true,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 4,
    "title": "Miss",
    "firstname": "Abbie",
    "lastname": "Smith",
    "dob": "1982-03-14",
    "age": "34",
    "gender": "Female",
    "urn": "2053688",
    "address": {
      "address1": "78 Broomfield Place",
      "town": "Stonham Aspal",
      "postcode": "IP14 0XB"
    },
    "email": "abbie.smith@gmail.com",
    "phone": "079 5115 9062",
    "national-insurance-number": "ZK 71 11 43 D",
    "case-details": {
      "status": 'Ready for <abbr title="Single Justice Procedure">SJP</abbr> decision',
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-09-04",
    },
    "offence": {
      "title": "Travel on railway without paying fare",
      "date": "2016-01-18",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "mitigation": "I picked up my partner&rsquo;s ticket instead of my own when I left my house.",
      "plea": "Pleaded guilty"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "Yes",
    },
    "files": {
      "file": [
        {
        "document": true,
        "uploaded": "2016-05-08",
        "time": "10:37am",
        "filename": "case-123456789",
        "filetype": "Zip",
        "status": "Being checked",
        "url": ""
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": true,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 5,
    "title": "Mr",
    "firstname": "Leon",
    "lastname": "Smith",
    "dob": "1981-08-31",
    "age": "34",
    "gender": "Male",
    "urn": "2056139",
    "address": {
      "address1": "91 Worthy Lane",
      "town": "Mearns",
      "postcode": "G77 7GA"
    },
    "email": "leon.smith@gmail.com",
    "phone": "077 8068 5313",
    "national-insurance-number": "TK 60 97 18 A",
    "case-details": {
      "status": "Awaiting plea",
      "prosecutor": "Transport for London",
      "charge-date": "2015-01-21",
      "notice-served": "2016-09-18",
    },
    "offence": {
      "title": "Passenger used expired ticket",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Pleaded guilty"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "Yes",
    },
    "files": {
      "file": [
        {
          "csv": true,
          "errortype3": true,
          "uploaded": "2016-05-08",
          "time": "9:30am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status": '<span class="text-error">Rejected &ndash; errors found</span>',
          "url": "check-csv-uploads/report/errors/5"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 6,
    "title": "Mrs",
    "firstname": "Olivia",
    "lastname": "Smith",
    "dob": "1967-09-23",
    "age": "48",
    "gender": "Female",
    "urn": "2056135",
    "address": {
      "address1": "94 Overton Circle",
      "town": "Liverton",
      "postcode": "TQ12 1LQ"
    },
    "email": "olivia.smith@gmail.com",
    "phone": "077 0494 5090",
    "national-insurance-number": "NY 80 08 89 A",
    "case-details": {
      "status": "Pending offence withdrawal",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-01-14",
    },
    "offence": {
      "title": "Passenger used expired ticket",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Awaiting plea"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "Yes",
    },
    "files": {
      "file": [
        {
          "csv": true,
          "uploaded": "2016-04-15",
          "time": "9:18am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status": "Sent to court",
          "url": "check-csv-uploads/report/success/5"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 7,
    "title": "Mr",
    "firstname": "Joel",
    "lastname": "Smith",
    "dob": "1980-01-28",
    "age": "36",
    "gender": "Male",
    "urn": "2056136",
    "address": {
      "address1": "75 Seafield Street",
      "town": "Llanteg",
      "postcode": "SA67 9EJ"
    },
    "email": "joel.smith@gmail.com",
    "phone": "079 4115 6799",
    "national-insurance-number": "HS 12 20 51 D",
    "case-details": {
      "status": "Awaiting plea",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-09-18"
    },
    "offence": {
      "title": "Passenger failing to pay fare",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Pleaded guilty"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "Yes",
    },
    "files": {
      "file": [
        {
          "document": true,
          "uploaded": "2016-04-02",
          "time": "2:57pm",
          "filename": "case-123456789",
          "filetype": "Zip",
          "status": "Sent to court",
          "url": "check-document-uploads/report/success/7"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 8,
    "title": "Mr",
    "firstname": "Harrison",
    "lastname": "Smith",
    "dob": "1973-01-22",
    "age": "43",
    "gender": "Male",
    "urn": "2056137",
    "address": {
      "address1": "22 Spilman Street",
      "town": "Grantley",
      "postcode": "HG4 2ET"
    },
    "email": "harrison.smith@gmail.com",
    "phone": "070 2908 3863",
    "national-insurance-number": "MJ 82 16 61 A",
    "case-details": {
      "status": "Awaiting plea",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-09-18"
    },
    "offence": {
      "title": "Passenger failing to pay fare",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Pleaded guilty"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "Yes",
    },
    "files": {
      "file": [
        {
          "csv": true,
          "uploaded": "2016-03-02",
          "time": "9:57am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status": "Sent to court",
          "url": "check-csv-uploads/report/success/8"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 9,
    "title": "Miss",
    "firstname": "Kian",
    "lastname": "Smith",
    "dob": "1978-09-20",
    "age": "37",
    "gender": "Female",
    "urn": "2056138",
    "address": {
      "address1": "35 Ponteland Rd",
      "town": "Howend",
      "postcode": "MK45 0ZW"
    },
    "email": "kian.smith@gmail.com",
    "phone": "070 1279 6913",
    "national-insurance-number": "LC 59 17 17 B",
    "case-details": {
      "status": "Awaiting plea",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-01-14"
    },
    "offence": {
      "title": "Passenger used altered/defaced ticket",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Pleaded guilty"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "duration": "",
        "amount": ""
      },
      "receiving-benefits": "Yes",
    },
    "files": {
      "document": [
        {
          "document": true,
          "uploaded": "2016-02-18",
          "time": "9:57am",
          "filename": "case-123456789",
          "filetype": "Zip",
          "status": "Sent to court",
          "url": "check-document-uploads/report/success/9"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  },

  {
    "id": 10,
    "title": "Miss",
    "firstname": "Naomi",
    "lastname": "Smith",
    "dob": "1995-10-19",
    "age": "20",
    "gender": "Female",
    "urn": "2056139",
    "address": {
      "address1": "50 Cloch Rd",
      "town": "St Paul's Cray",
      "postcode": "BR5 1WH"
    },
    "email": "naomi.smith@gmail.com",
    "phone": "070 6195 4223",
    "national-insurance-number": "LN 56 80 72",
    "case-details": {
      "status": "Awaiting plea",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2015-01-14"
    },
    "offence": {
      "title": "Passenger used altered/defaced ticket",
      "date": "2016-02-01",
      "statement-of-facts": 'I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;. I had no choice but to issue him with a ticket.',
      "plea": "Pleaded guilty"
    },
    "employment": {
      "status": "Unemployed",
      "since-date": "(since 15 July 2016)",
      "since-date-iso": "",
      "employer-name": "",
      "employer-address": {
        "address1": "",
        "address2": "",
        "town": "",
        "postcode": ""
      },
      "employer-telephone": "",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "No",
    },
    "files": {
      "document": [
        {
          "csv": true,
          "uploaded": "2016-02-16",
          "time": "9:18am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status": "Sent to court",
          "url": "check-csv-uploads/report/success/10"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
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
