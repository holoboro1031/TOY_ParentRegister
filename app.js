// https://stackoverflow.com/questions/3244361/
//import { interests_activitys } from './interests_activities.js'

class ChildData {
    #name;
    #age;
    #interest;

    constructor(name = "", age = 0, interest = []) {
      this.#name = name;
      this.#age = age;
      this.#interest = interest;
    }
    // Getter
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    get interest() {
        return this.#interest;
    }
}
class ParentData {
    #fname;
    #sname;
    #photo_id;

    constructor(fname = "", sname = 0, photo_id) {
      this.#fname = fname;
      this.#sname = sname;
      this.#photo_id = photo_id;
    }
    // Getter
    get fname() {
        return this.#fname;
    }
    get sname() {
        return this.#sname;
    }
    get photo_id() {
        return this.#photo_id;
    }
}
class SeniorData {
    #name;
    #age;
    #interest;
    #photo;
    #phone_num;
    #ihsc;

    constructor(name = "", age = 0, interest = [], photo, phone_num, ihsc) {
    this.#name = name;
    this.#age = age;
    this.#interest = interest;
    this.#photo = photo;
    this.#phone_num = phone_num;
    this.#ihsc = ihsc; // Identity History Summary Checks
    }
    // Getter
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    get interest() {
        return this.#interest;
    }
    get photo() {
        return this.#photo;
    }
    get phone_num() {
        return this.#phone_num;
    }
    get ihsc() {
        return this.#ihsc;
    }
}
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

const senior_database = [
    new SeniorData("Edu Carvalho", 75, [true,false,false,true,true,false,false,true,false,true,false,false,false], "http://holoboro1031.github.io/senior-activity_database/[Pexels][Edu Carvalho] selective-focus-photography-of-woman-standing-near-green-plant-2050976.jpg", "(111) 111-1111"),
    new SeniorData("Nashua Volquez-Young", 80, [true,false,false,true,false,true,false,false,false,false,true,true,false], "http://holoboro1031.github.io/senior-activity_database/[Pexels][Nashua Volquez-Young] woman-wearing-red-hat-and-sunglasses-1729931.jpg", "(222) 222-2222"),
    new SeniorData("Thgusstavo Santana", 79, [true,false,true,true,false,false,false,true,false,false,true,false,false], "http://holoboro1031.github.io/senior-activity_database/[Pexels][Thgusstavo Santana] man-wearing-blue-hurley-shirt-2774292.jpg", "(333) 333-3333"),
    new SeniorData("Anthony Metcalfe", 68, [false,true,false,false,false,true,false,true,true,false,false,true,false], "http://holoboro1031.github.io/senior-activity_database/[Unsplash][Anthony Metcalfe] QQsRTGAZp9o.jpg", "(444) 444-4444"),
    new SeniorData("Freddy Kearney", 83, [false,false,true,false,true,false,true,false,false,false,false,true,true], "http://holoboro1031.github.io/senior-activity_database/[Unsplash][Freddy Kearney] o-ioeoATbIM.jpg", "(555) 555-5555"),
    new SeniorData("Jixiao Huang", 65, [false,true,false,false,true,false,true,false,false,true,false,false,true], "http://holoboro1031.github.io/senior-activity_database/[Unsplash][Jixiao Huang] I1Plc-FAAnQ.jpg", "(666) 666-6666"),
];

const color_hex = ["#27AE60", "#F39C12", "#E67E22", "#C0392B", "#9B59B6"];

console.log(interests_activitys)
console.log(senior_database)
// senior-activity data
const seionr_img_src = "http://holoboro1031.github.io/senior-activity_database/[Pexels][Edu Carvalho] selective-focus-photography-of-woman-standing-near-green-plant-2050976.jpg";
const activity = "Gardening";

const child_info_td = document.getElementById("child-info-td");
const recommend_td = document.getElementById("recommend-td");
const parent_id_td = document.getElementById("parent-id-td");

// child info components
const child_name_text = document.getElementById("child-name-text");
const child_age_input = document.getElementById("child-age-text");
const child_interests_table = document.getElementById("child-interests-table");
const child_interests_array = [];

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
    child_interests_array.push(checkbox_input);
}
//const checkbox = document.querySelectorAll('input[type=checkbox]');

const child_submit_button = document.getElementById('child-submit-button');

// senior-activity components
const senior_img = document.getElementById('senior-img'); 
const senior_name_content_span = document.getElementById('senior-name-content-span'); 
const activity_content_span = document.getElementById('activity-content-span'); 
const match_content_span = document.getElementById('match-content-span'); 

// child submit button
let recommends;
let r_idx;
let child_data;
let interest_count;
child_submit_button.onclick = () => {
    child_data = new ChildData(child_name_text.value, child_age_input.value, getChecks(child_interests_array));
    console.log(`=====childData_start=====`);
    console.log(child_data);
    console.log(`=====childData_end=====`);

    recommends = getRecommend(child_data, interests_activitys, senior_database);
    r_idx = 0;

    console.log(recommends);
    senior_img.src = senior_database[recommends[r_idx][1]].photo;
    recommend_td.hidden = false;
    child_info_td.hidden = true;
    senior_name_content_span.innerHTML = senior_database[recommends[r_idx][1]].name;
    activity_content_span.innerHTML = indexToActivities(recommends[r_idx][0]);
    interest_count = countChecks(child_interests_array);
    const ratio = recommends[r_idx][0].length / interest_count;
    match_content_span.innerHTML = ratio.toFixed(2);
    match_content_span.style = `color: ${getColor(ratio)};`;
};

// senior accept button
const senior_accept_button = document.getElementById('senior-accept-button');
senior_accept_button.onclick = () => {
    recommend_td.hidden = true;
    parent_id_td.hidden = false;
    console.log(`=====seniorData_start=====`);    
    console.log(senior_database[recommends[r_idx][1]])
    console.log(`=====seniorData_end=====`);
}

const senior_decline_button = document.getElementById('senior-decline-button');
senior_decline_button.onclick = () => {
    if (r_idx < recommends.length-1) {
        r_idx++;
        senior_img.src = senior_database[recommends[r_idx][1]].photo;        
        senior_name_content_span.innerHTML = senior_database[recommends[r_idx][1]].name;
        activity_content_span.innerHTML = indexToActivities(recommends[r_idx][0]);
        const ratio = recommends[r_idx][0].length / interest_count;
        match_content_span.innerHTML = ratio.toFixed(2);
        match_content_span.style = `color: ${getColor(ratio)};`;
    } else {
        senior_img.src = "http://holoboro1031.github.io/no_more_seniors.png";
        //senior_img.src = "no_more_seniors.png";
        senior_name_content_span.innerHTML = "N/A";
        activity_content_span.innerHTML = "N/A";        
        match_content_span.innerHTML = "N/A";
        match_content_span.style = `color: #000000;`;
    }
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
    parent_id_img.removeAttribute("hidden");
}

let parent_data;
parent_submit_button.onclick = () => {
    //console.log("click!")
    console.log(`=====childData_start=====`);
    console.log(child_data);
    //console.log(`child gender: ${child_gender_select.value}`);
    console.log(`=====childData_end=====`);

    parent_data = new ParentData(parent_fname_text.value, parent_sname_text.value, parent_id_file.value)
    console.log(`=====parentData_start=====`);
    console.log(parent_data);
    console.log(`=====parentData_end=====`);
}

function getID(name, type, tag) {
    if (type == null)
        return name.toLowerCase().replaceAll(' ', '-')+`-${tag}`;
    else
        return name.toLowerCase().replaceAll(' ', '-')+`-${type}-${tag}`;
}

function getChecks(checkbox_array) {
    const array = [];
    for (var i = 0; i < checkbox_array.length; i++) {  
        array.push(checkbox_array[i].checked);
    }
    return array;
}

function countChecks(checkbox_array) {
    var count = 0;
    for (var i = 0; i < checkbox_array.length; i++) {  
        if (checkbox_array[i].checked) count += 1;
    }
    return count;
}

function getColor(ratio) {
    const interval = 1 / color_hex.length;
    var index = color_hex.length - parseInt(ratio / interval) - 1;
    if (index < 0) index = 0;
    console.log(color_hex[index]);
    return color_hex[index];
}

// enumerator
function getRecommend(child_data, interests_activitys, senior_database) {
    const ret = []
    for (var i=0; i<senior_database.length; i++) {
        var cur_match = 0;
        var cur_act = [];
        for (var j=0; j<interests_activitys.length; j++) {
            if (senior_database[i].interest[j] && child_data.interest[j]) {
                console.log(`${senior_database[i].name} has ${interests_activitys[j]} as interest.`)
                cur_match += 1;
                cur_act.push(j);
            }
        }
        console.log(cur_match);
        ret.push([cur_act, i, false]);     
        
    }
    // https://stackoverflow.com/questions/8837454/   
    ret.sort(function(a, b) {
        var keyA = new Date(a[0].length),
          keyB = new Date(b[0].length);
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    });
    return ret;
}

function indexToActivities(act_idx) {
    const ret = [];
    for (var i=0; i<act_idx.length; i++) {
        ret.push(interests_activitys[act_idx[i]]);
    }
    return ret;
}
