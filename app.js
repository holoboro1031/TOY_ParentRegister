// senior-activity data
const seionr_img_src = "senior-activity_database/[Pexels][Edu Carvalho] selective-focus-photography-of-woman-standing-near-green-plant-2050976.jpg"
const activity = "Activity: Drink Coffe"

// child info components
const child_info_form = document.getElementById("child-info-form");

const child_name_text = document.getElementById("child-name-text");
const child_age_input = document.getElementById("child-age-text");
const child_gender_select = document.getElementById("child-gender-select");
const checkbox = document.querySelectorAll('input[type=checkbox]');
const child_interests_input = document.getElementById("child-interests-text");

const child_submit_button = document.getElementById('child-submit-button');

// senior-activity components
const senior_img = document.getElementById('senior-img'); 
const activity_span = document.getElementById('activity-span'); 

// child submit button
child_submit_button.onclick = () => {
    //console.log("click!")
    console.log(`=====childData`)
    console.log(`child name: ${child_name_text.value}`)
    console.log(`child age: ${child_age_input.value}`)
    console.log(`child gender: ${child_gender_select.value}`)
    console.log(`child interest:`)
    for (var i = 0; i < checkbox.length; i++) {        
        console.log(`${checkbox[i].id} ${checkbox[i].checked}`)
    }
    console.log(`other interest: ${child_interests_input.value}`)
    console.log(`=====`)


    senior_img.src = seionr_img_src
    senior_img.removeAttribute("hidden")
    activity_span.innerHTML = activity
}

// senior accept button
const senior_accpet_button = document.getElementById('senior-accept-button');
senior_accpet_button.onclick = () => {
    //console.log("click!")
    console.log(`Senior fname: András`)
    console.log(`Senior sname: Arató`)
    console.log(`Contact: (999) 999-9999`)
    console.log(`=====`)
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
    console.log(`child name: ${child_name_text.value}`)
    console.log(`child age: ${child_age_input.value}`)
    console.log(`child gender: ${child_gender_select.value}`)

    console.log(`parent fname: ${parent_fname_text.value}`)
    console.log(`parent sname: ${parent_sname_text.value}`)
    console.log(`parent ID: ${parent_id_file.value}`)
    console.log(`=====`)
}

