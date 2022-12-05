// https://stackoverflow.com/questions/3244361/
//import { interests_activitys } from './interests_activities.js'
const interests_activitys = [
    "Football", 
    "Soccer", 
    "Basketball", 
    "Chess", 
    "Poker", 
    "Board games", 
    "Video games", 
    "Storytelling", 
    "Origami", 
    "Knitting", 
    "Puzzles", 
    "Playing an instrument", 
    "Crossword puzzles"
];

console.log(interests_activitys)
// senior-activity data
const seionr_img_src = "http://holoboro1031.github.io/senior-activity_database/[Pexels][Edu Carvalho] selective-focus-photography-of-woman-standing-near-green-plant-2050976.jpg"
const activity = "Gardening"

// child info components
const child_info_form = document.getElementById("child-info-form");

const child_name_text = document.getElementById("child-name-text");
const child_age_input = document.getElementById("child-age-text");
const child_gender_select = document.getElementById("child-gender-select");
const child_interests_table = document.getElementById("child-interests-table");
const checkbox = []

for (var i = 0; i < interests_activitys.length; i++) {    
    // https://www.w3schools.com/jsref/met_table_insertrow.asp
    var row = child_interests_table.insertRow(-1);    

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    // row.innerHTML = `<tr><td>${interests_activitys[i]}</td><td><input type="checkbox" id="${getID(interests_activitys[i], "checkbox", "input")}"></td></tr>`

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell
    // https://www.w3schools.com/jsref/met_tablerow_insertcell.asp
    var cell1 = row.insertCell(-1);
    let label = document.createTextNode(interests_activitys[i]);
    cell1.appendChild(label);

    var cell2 = row.insertCell(-1);
    var checkbox_input = document.createElement('input');
    checkbox_input.type = "checkbox";
    checkbox_input.id = getID(interests_activitys[i], "checkbox", "input");
    cell2.appendChild(checkbox_input);
    checkbox.push(checkbox_input);
}
//const checkbox = document.querySelectorAll('input[type=checkbox]');

const child_submit_button = document.getElementById('child-submit-button');

// senior-activity components
const senior_img = document.getElementById('senior-img'); 
const activity_content_span = document.getElementById('activity-content-span'); 

// child submit button
child_submit_button.onclick = () => {
    //console.log("click!")
    console.log(`=====childData_start=====`)
    console.log(`child name: ${child_name_text.value}`)
    console.log(`child age: ${child_age_input.value}`)
    console.log(`child gender: ${child_gender_select.value}`)
    console.log(`child interest:`)

    for (var i = 0; i < checkbox.length; i++) {    
        console.log(`${checkbox[i].id} ${checkbox[i].checked}`)
    }    
    console.log(`=====childData_end=====`)


    senior_img.src = seionr_img_src
    senior_img.removeAttribute("hidden")
    activity_content_span.innerHTML = activity
}

// senior accept button
const senior_accpet_button = document.getElementById('senior-accept-button');
senior_accpet_button.onclick = () => {
    //console.log("click!")
    console.log(`=====seniorData_start=====`)
    console.log(`Senior fname: András`)
    console.log(`Senior sname: Arató`)
    console.log(`Contact: (999) 999-9999`)
    console.log(`=====seniorData_end=====`)
}

// parent ID components
const parent_fname_text = document.getElementById("parent-first-name-text");
const parent_sname_text = document.getElementById("parent-second-name-text");
const parent_id_file = document.getElementById("parent-id-file");
const parent_id_img = document.getElementById('parent-id-img'); 
const parent_submit_button = document.getElementById('parent-submit-button');
parent_id_file.onchange = (event) => {
    //https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
    parent_id_img.src = URL.createObjectURL(event.target.files[0]);
    parent_id_img.removeAttribute("hidden")
}

parent_submit_button.onclick = () => {
    //console.log("click!")
    console.log(`=====childData_start=====`)
    console.log(`child name: ${child_name_text.value}`)
    console.log(`child age: ${child_age_input.value}`)
    console.log(`child gender: ${child_gender_select.value}`)
    console.log(`=====childData_end=====`)

    console.log(`=====parentData_start=====`)
    console.log(`parent fname: ${parent_fname_text.value}`)
    console.log(`parent sname: ${parent_sname_text.value}`)
    console.log(`parent ID: ${parent_id_file.value}`)
    console.log(`=====parentData_end=====`)
}

function getID(name, type, tag) {
    if (type == null)
        return name.toLowerCase().replaceAll(' ', '-')+`-${tag}`
    else
        return name.toLowerCase().replaceAll(' ', '-')+`-${type}-${tag}`
}