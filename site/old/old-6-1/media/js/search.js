$(document).ready(function(){
    var data = {
        "design": [
            "color", "typography", "imagery", "icongraphy",
        ],
        "ui": [
            "navigtion", "forms", "content", "page-templates", "buttons", "cta", "tabs", "carousel", "accordion", "forms", "pagination", "slider", "gallery", "hero"
        ],
        "modules": [
            "Belhaven", "Bottle", "Guinness", "Draught", "Murphy", "cranberry", "Porter"
        ],
        "glossary": [
            "Watermelon", "Light", "Lime", "Strawberry"
        ]
    };

    // var data = [{
    //     "firstName": "John",
    //     "lastName": "Doe"
    // }, {
    //     "firstName": "Anna",
    //     "lastName": "Smith"
    // }, {
    //     "firstName": "Peter",
    //     "lastName": "Jones"
    // }];

    // var data = {
    //     "design": {
    //         {
    //             "colors": 1,
    //             "name": "John Doe"
    //         }, {
    //             "typography": 1,
    //             "name": "John Doe"
    //         }, {
    //             "imagery": 1,
    //             "name": "John Doe"
    //         },
    //     },
    //     "ui": [
    //         "page-templates", "buttons", "cta", "tabs", "carousel", "accordion", "forms", "pagination", "slider", "gallery", "hero"
    //     ],
    //     "modules": [
    //         "Belhaven", "Bottle", "Guinness", "Draught", "Murphy", "cranberry", "Porter"
    //     ],
    //     "glossary": [
    //         "Watermelon", "Light", "Lime", "Strawberry"
    //     ]
    // };

    // { 
    //     "design": {
    //         {"colors":1,"name":"John Doe"},
    //         {"typography":1,"name":"John Doe"},
    //         {"imagery":1,"name":"John Doe"},
    //     },
    //     "ui": {
    //         "content": [
    //             {"buttons":1,"name":"John Doe"},
    //             {"carousels":2,"name":"Don Joeh"},
    //             {"pagination":2,"name":"Don Joeh"},
    //             {"tabs":2,"name":"Don Joeh"},
    //             {"slider":2,"name":"Don Joeh"},
    //             {"media-gallery":2,"name":"Don Joeh"},
    //             {"modals":2,"name":"Don Joeh"},
    //         ],
    //         "navigation": [
    //             {"id":1,"name":"John Doe"},
    //             {"id":2,"name":"Don Joeh"}
    //         ],
    //         "forms": [
    //             {"id":1,"name":"John Doe"},
    //             {"id":2,"name":"Don Joeh"}
    //         ]
    //     }, 
    //     "modules": {
    //         "thing": [[1,42],[2,2]]
    //      }
    // }

    $('#q').typeahead({
        minLength: 1,
        maxItem: 15,
        order: "asc",
        hint: true,
        group: [true, "{{group}}"],
        maxItemPerGroup: 5,
        backdrop: {
            "background-color": "#fff"
        },
        // href: "#{{group|slugify}}#{{display|slugify}}/",

        href: "/site/{{group|slugify}}/{{display|slugify}}",
        dropdownFilter: "all",
        emptyTemplate: 'No result for "{{query}}"',
        source: {
            "Design Elements": {
                data: data.design
            },
            "UI Components": {
                data: data.ui
            },
            "Modules": {
                data: data.modules
            },
            "Glossary": {
                data: data.glossary
            }
        },
        callback: {
            onClickAfter: function (node, a, item, event) {

                // href key gets added inside item from options.href configuration
                // alert(item.href);

            }
        },
        debug: true
    });
});
