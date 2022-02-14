let money;
let people;
let tip;

//just so i dont have to type this again and again
function set_value(id, value) {
    document.getElementById(id).value = value;
};

function set_inner_html(id, value) {
    document.getElementById(id).innerHTML = value;
}
//calculates result
function update_result(){
    let tip_amount = 0;
    let total = 0;
    let no_tip;

    if(people == null || people <= 0 || tip == null) {
        set_inner_html("tip-amount", "$" + tip_amount.toFixed(2));
        set_inner_html("total", "$" + total.toFixed(2));
        return;
    }

    no_tip = parseFloat(money/people);
    tip_amount = parseFloat(no_tip*tip);
    total = no_tip + tip_amount;

    set_inner_html("tip-amount", "$" + tip_amount.toFixed(2));
    set_inner_html("total", "$" + total.toFixed(2));
};

function clear_tips() {
    let checked;
    
    checked = document.getElementsByClassName("checked")[0];
    if(checked != null) checked.classList.remove("checked");
}

//Strips input text of letter and symbols
function text_stripper(text) {
    const reg = /\D/g;
    return text.replace(reg, '');
}

function money_input(input) {
    let value;
    
    value = text_stripper(input);
    money = parseFloat(value/100).toFixed(2);

    set_value("money-input", money);
    update_result();
}

function people_input(input) {
    if(input.length == 0) input = "0";
    people = parseInt(text_stripper(input));
    set_value("people-input", people);
    update_result();
}

function tip_input(input, tip_element) {
    tip = parseFloat(text_stripper(input)/100).toFixed(2);
    clear_tips();
    if(tip_element) {
        set_value("tip-input", null);

        tip_element.classList.add("checked");
    } else set_value("tip-input", (tip*100 + "%"));
    update_result();
}

function reset() {
    money = null;
    people = null;
    tip = null;

    clear_tips();

    set_value("money-input", null);
    set_value("people-input", null);
    set_value("tip-input", null);
    update_result()
}

function main(){
    reset();
};


main();