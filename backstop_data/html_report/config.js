report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20221103-140852/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.4166666666666667,
          "misMatchPercentage": "0.42",
          "analysisTime": 11
        },
        "diffImage": "../bitmaps_test/20221103-140852/failed_diff_backstop_default_BackstopJS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_1_desktop.png",
        "test": "../bitmaps_test/20221103-140852/backstop_default_BackstopJS_Homepage_0_document_1_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_desktop.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.18094380696614581,
          "misMatchPercentage": "0.18",
          "analysisTime": 18
        },
        "diffImage": "../bitmaps_test/20221103-140852/failed_diff_backstop_default_BackstopJS_Homepage_0_document_1_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_some_div_0_phone.png",
        "test": "../bitmaps_test/20221103-140852/backstop_default_BackstopJS_Homepage_0_some_div_0_phone.png",
        "selector": "#some_div",
        "fileName": "backstop_default_BackstopJS_Homepage_0_some_div_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -6,
            "height": 0
          },
          "rawMisMatchPercentage": 43.20175438596491,
          "misMatchPercentage": "43.20",
          "analysisTime": 1
        },
        "diffImage": "../bitmaps_test/20221103-140852/failed_diff_backstop_default_BackstopJS_Homepage_0_some_div_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_some_div_1_desktop.png",
        "test": "../bitmaps_test/20221103-140852/backstop_default_BackstopJS_Homepage_0_some_div_1_desktop.png",
        "selector": "#some_div",
        "fileName": "backstop_default_BackstopJS_Homepage_0_some_div_1_desktop.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -10,
            "height": 0
          },
          "rawMisMatchPercentage": 35.73446327683616,
          "misMatchPercentage": "35.73",
          "analysisTime": 4
        },
        "diffImage": "../bitmaps_test/20221103-140852/failed_diff_backstop_default_BackstopJS_Homepage_0_some_div_1_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});