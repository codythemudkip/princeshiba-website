let char_list_container = [];
//const mason_data = require("./chars/mason/mason.json")

let char_list = [];

let char_info_list = [];

async function main() {
    char_list = await getData()

    char_list_container = document.querySelector("#char-grid")
    char_info_list = document.querySelector("#char-info")

    for (const char of char_list)
    {
        const listItem = document.createElement("li");
        const button = document.createElement("button");

        button.textContent = char.name;

        button.addEventListener("click", () => {
            UpdateCharacterInfo(char.id);
        });

        listItem.appendChild(button);
        char_list_container.appendChild(listItem);
    }
}

async function getCharData(name) {
    const file = await fetch("./chars/" + name + "/" + name + ".json");
    const data = await file.json();

    return data;
}

async function getData() {
    const res = await fetch("./chars/chars.json");
    const data = await res.json();

    return data;
}

async function getAbilityMod(value) {
    return Math.floor((value - 10) / 2);
}

async function UpdateCharacterInfo(char_name)
{
    const folder = "./chars/" + char_name + "/";
    const char = await getCharData(char_name);

    var pic = document.querySelector("#pic");

    pic.setAttribute("src", char.pic);

    var name_label = document.querySelector("#name");
    name_label.textContent = "Name: " + char.name

    var class_label = document.querySelector("#class-name");
    class_label.textContent = "Class: " + char.class

    var age_label = document.querySelector("#age");
    age_label.textContent = "Age: " + char.age

    var backgorund = document.querySelector("#background");
    backgorund.textContent = "Background: " + char.background;

    var height = document.querySelector("#height");
    height.textContent = "Height: " + char.height;

    var species = document.querySelector("#species");
    species.textContent = "Species: " + char.species;

    var gender = document.querySelector("#gender");
    gender.textContent = "Gender: " + char.gender;

    var job = document.querySelector("#job");
    job.textContent = "Occupation: " + char.job;

    var level = document.querySelector("#level");
    level.textContent = "Level: " + char.level;

    var birthplace = document.querySelector("#birthplace");
    birthplace.textContent = "Birth-place: " + char.birthplace;

    var hp = document.querySelector("#hp");
    hp.textContent = "HP: " + char.hp + "/" + char.max_hp;

    var mp = document.querySelector("#mp");
    mp.textContent = "MP: " + char.mp + "/" + char.max_mp;

    var strength = document.querySelector("#str");
    var str_mod = await getAbilityMod(char.strength);
    strength.textContent = "Strength: " + char.strength + " (+" + str_mod + ")"

    var dexterity = document.querySelector("#dex");
    var dex_mod = await getAbilityMod(char.dexterity);
    dexterity.textContent = "Dexterity: " + char.dexterity + " (+" + dex_mod + ")"

    var vitality = document.querySelector("#vit");
    var vit_mod = await getAbilityMod(char.vitality);
    vitality.textContent = "Vitality: " + char.vitality + " (+" + vit_mod + ")"

    var intelligence = document.querySelector("#int");
    var int_mod = await getAbilityMod(char.intelligence);
    intelligence.textContent = "Intelligence: " + char.intelligence + " +" + int_mod + ")";

    var wisdom = document.querySelector("#wis");
    var wis_mod = await getAbilityMod(char.wisdom);
    wisdom.textContent = "Wisdom: " + char.wisdom + " (+" + wis_mod + ")";

    var charisma = document.querySelector("#cha");
    var cha_mod = await getAbilityMod(char.charisma);
    charisma.textContent = "Charisma: " + char.charisma + " (+" + cha_mod + ")";
}

main()