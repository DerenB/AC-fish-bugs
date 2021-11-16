/* -------------------- Date Values -------------------- */
//Gets the Current Date and Time
var todayDate = new Date();

//Gets the Date Values
var dd = ("0" + todayDate.getDate()).slice(-2);
var mm = ("0" + (todayDate.getMonth() + 1)).slice(-2);
var yyyy = todayDate.getFullYear();
//document.getElementById('currentDate').innerHTML = mm + " / " + dd + " / " + yyyy;

//Gets the Time Values
var hh = ("0" + todayDate.getHours()).slice(-2);
var min = ("0" + todayDate.getMinutes()).slice(-2);
var ss = ("0" + todayDate.getSeconds()).slice(-2);
//document.getElementById('currentTime').innerHTML = hh + " : " + min + " : " + ss;
document.getElementById("dateTime").innerHTML = mm + " / " + dd + " / " + yyyy + ", " + hh + " : " + min + " : " + ss;

//Sets the Current Data
var currentMonth = ("0" + (todayDate.getMonth() + 1)).slice(-2);
var currentHour = (("0" + todayDate.getHours()).slice(-2)) * 100;

/* -------------------- Date Values -------------------- */

/* -------------------- DATA TABLES-------------------- */
var fishNorth = [
    ["Name","Location","Price","Month Start","Month End","Time Start","Time End"],
    ["Anchovy","Sea",200,1,12,400,2100,"images/Anchovy.png"],
    ["Angelfish","River",3000,5,10,1600,900],
    ["Arapaima","River",10000,6,9,1600,900],
    ["Arowana","River",10000,6,9,1600,900],
    ["Barred Knifejaw","Sea",5000,3,11,0,2359],
    ["Barreleye","Sea",15000,1,12,2100,400],
    ["Betta","River",2500,5,10,900,1600],
    ["Bitterling","River",900,11,3,0,2359],
    ["Black Bass","River",400,1,12,0,2359],
    ["Blowfish","Sea",5000,11,2,2100,400],
    ["Blue Marlin","Pier",10000,7,9,0,2359],
    ["Blue Marlin","Pier",10000,11,4,0,2359],
    ["Bluegill","River",180,1,12,900,1600],
    ["Butterfly Fish","Sea",1000,4,9,0,2359],
    ["Carp","Pond",300,1,12,0,2359],
    ["Catfish","Pond",800,5,10,1600,900],
    ["Char","River (Clifftop) Pond",3800,3,6,1600,900],
    ["Char","River (Clifftop) Pond",3800,9,11,1600,900],
    ["Cherry Salmon","River (Clifftop)",1000,3,6,1600,900],
    ["Cherry Salmon","River (Clifftop)",1000,9,11,1600,900],
    ["Clown Fish","Sea",650,4,9,0,2359],
    ["Coelacanth","Sea",15000,1,12,0,2359],
    ["Crawfish","Pond",200,4,9,0,2359],
    ["Crucian Carp","River",160,1,12,0,2359],
    ["Dab","Sea",300,10,4,0,2359],
    ["Dace","River",240,1,12,1600,900],
    ["Dorado","River",15000,6,9,400,2100],
    ["Football Fish","Sea",2500,11,3,1600,900],
    ["Freshwater Goby","River",400,1,12,1600,900],
    ["Frog","Pond",120,5,8,0,2359],
    ["Gar","Pond",6000,6,9,1600,900],
    ["Giant Snakehead","Pond",5500,6,8,900,1600],
    ["Giant Trevally","Pier",4500,5,10,0,2359],
    ["Golden Trout","River (Clifftop)",15000,3,5,1600,900],
    ["Golden Trout","River (Clifftop)",15000,9,11,1600,900],
    ["Goldfish","Pond",1300,1,12,0,2359],
    ["Great White Shark","Sea",15000,6,9,1600,900],
    ["Guppy","River",1300,4,11,900,1600],
    ["Hammerhead Shark","Sea",8000,6,9,1600,900],
    ["Horse Mackerel","Sea",150,1,12,0,2359],
    ["Killifish","Pond",300,4,8,0,2359],
    ["King Salmon","River (Mouth)",1800,9,9,0,2359],
    ["Koi","Pond",4000,1,12,1600,900],
    ["Loach","River",400,3,5,0,2359],
    ["Mahi-Mahi","Pier",6000,5,10,0,2359],
    ["Mitten Crab","River",2000,9,11,1600,900],
    ["Moray Eel","Sea",2000,8,10,0,2359],
    ["Napoleonfish","Sea",10000,7,8,400,2100],
    ["Neon Tetra","River",500,4,11,900,1600],
    ["Nibble Fish","River",1500,5,9,900,1600],
    ["Oarfish","Sea",9000,12,5,0,2359],
    ["Ocean Sunfish","Sea",4000,7,9,400,2100],
    ["Olive Flounder","Sea",800,1,12,0,2359],
    ["Pale Chub","River",200,1,12,900,1600],
    ["Pike","River",1800,9,12,0,2359],
    ["Piranha","River, Morning",2500,6,9,900,1600],
    ["Piranha","River, Night",2500,6,9,2100,400],
    ["Pond Smelt","River",500,12,2,0,2359],
    ["Pop-eyed Goldfish","Pond",1300,1,12,900,1600],
    ["Puffer Fish","Sea",250,7,9,0,2359],
    ["Rainbowfish","River",800,5,10,900,1600],
    ["Ranchu Goldfish","Pond",4500,1,12,900,1600],
    ["Ray","Sea",3000,8,11,400,2100],
    ["Red Snapper","Sea",3000,1,12,0,2359],
    ["Ribbon Eel","Sea",600,6,10,0,2359],
    ["Saddled Bichir","River",4000,6,9,2100,400],
    ["Salmon","River (Mouth)",700,9,9,0,2359],
    ["Saw Shark","Sea",12000,6,9,1600,900],
    ["Sea Bass","Sea",400,1,12,0,2359],
    ["Sea Butterfly","Sea",1000,12,3,0,2359],
    ["Sea Horse","Sea",1100,4,11,0,2359],
    ["Snapping Turtle","River",5000,4,10,2100,400],
    ["Soft-shelled turtle","River",3750,8,9,1600,900],
    ["Squid","Sea",500,12,8,0,2359],
    ["Stringfish","River (Clifftop)",15000,12,3,1600,900],
    ["Sturgeon","River (Mouth)",10000,9,3,0,2359],
    ["Suckerfish","Sea",1500,6,9,0,2359],
    ["Surgeonfish","Sea",1000,4,9,0,2359],
    ["Sweetfish","River",900,7,9,0,2359],
    ["Tadpole","Pond",100,3,7,0,2359],
    ["Tilapia","River",800,6,10,0,2359],
    ["Tuna","Pier",7000,11,4,0,2359],
    ["Whale Shark","Sea",13000,6,9,0,2359],
    ["Yellow Perch","River",300,10,3,0,2359],
    ["Zebra Turkeyfish","Sea",500,4,11,0,2359],
];

var fishSouth = [
    ["Name","Location","Price","Month Start","Month End","Time Start","Time End"],
    ["Anchovy","Sea",200,1,12,400,2100],
    ["Angelfish","River",3000,11,4,1600,900],
    ["Arapaima","River",10000,12,3,1600,900],
    ["Arowana","River",10000,12,3,1600,900],
    ["Barred knifejaw","Sea",5000,9,5,0,2359],
    ["Barreleye","Sea",15000,1,12,2100,400],
    ["Betta","River",2500,11,4,900,1600],
    ["Bitterling","River",900,5,9,0,2359],
    ["Black bass","River",400,1,12,0,2359],
    ["Blowfish","Sea",5000,5,8,2100,400],
    ["Blue marlin","Pier",10000,1,3,0,2359],
    ["Blue marlin","Pier",10000,5,10,0,2359],
    ["Bluegill","River",180,1,12,900,1600],
    ["Butterfly fish","Sea",1000,10,3,0,2359],
    ["Carp","Pond",300,1,12,0,2359],
    ["Catfish","Pond",800,11,4,1600,900],
    ["Char","River (Clifftop) Pond",3800,3,5,1600,900],
    ["Char","River (Clifftop) Pond",3800,9,12,1600,900],
    ["Cherry salmon","River (Clifftop)",1000,3,5,1600,900],
    ["Cherry salmon","River (Clifftop)",1000,9,12,1600,900],
    ["Clown fish","Sea",650,10,3,0,2359],
    ["Coelacanth","Sea",15000,1,12,0,2359],
    ["Crawfish","Pond",200,10,3,0,2359],
    ["Crucian carp","River",160,1,12,0,2359],
    ["Dab","Sea",300,4,10,0,2359],
    ["Dace","River",240,1,12,1600,900],
    ["Dorado","River",15000,12,3,400,2100],
    ["Football fish","Sea",2500,5,9,1600,900],
    ["Freshwater goby","River",400,1,12,1600,900],
    ["Frog","Pond",120,11,2,0,2359],
    ["Gar","Pond",6000,12,3,1600,900],
    ["Giant snakehead","Pond",5500,12,2,900,1600],
    ["Giant trevally","Pier",4500,11,4,0,2359],
    ["Golden trout","River (Clifftop)",15000,3,5,1600,900],
    ["Golden trout","River (Clifftop)",15000,9,11,1600,900],
    ["Goldfish","Pond",1300,1,12,0,2359],
    ["Great white shark","Sea",15000,12,3,1600,900],
    ["Guppy","River",1300,10,5,900,1600],
    ["Hammerhead shark","Sea",8000,12,3,1600,900],
    ["Horse mackerel","Sea",150,1,12,0,2359],
    ["Killifish","Pond",300,10,2,0,2359],
    ["King salmon","River (Mouth)",1800,3,3,0,2359],
    ["Koi","Pond",4000,1,12,1600,900],
    ["Loach","River",400,9,11,0,2359],
    ["Mahi-mahi","Pier",6000,11,4,0,2359],
    ["Mitten crab","River",2000,3,5,1600,900],
    ["Moray eel","Sea",2000,2,4,0,2359],
    ["Napoleonfish","Sea",10000,1,2,400,2100],
    ["Neon tetra","River",500,10,5,900,1600],
    ["Nibble fish","River",1500,11,3,900,1600],
    ["Oarfish","Sea",9000,6,11,0,2359],
    ["Ocean sunfish","Sea",4000,1,3,400,2100],
    ["Olive flounder","Sea",800,1,12,0,2359],
    ["Pale chub","River",200,1,12,900,1600],
    ["Pike","River",1800,3,6,0,2359],
    ["Piranha, Evening","River",2500,12,3,2100,400],
    ["Piranha, Morning","River",2500,12,3,900,1600],
    ["Pond smelt","River",500,6,8,0,2359],
    ["Pop-eyed goldfish","Pond",1300,1,12,900,1600],
    ["Puffer fish","Sea",250,1,3,0,2359],
    ["Rainbowfish","River",800,11,4,900,1600],
    ["Ranchu goldfish","Pond",4500,1,12,900,1600],
    ["Ray","Sea",3000,2,5,400,2100],
    ["Red snapper","Sea",3000,1,12,0,2359],
    ["Ribbon eel","Sea",600,12,4,0,2359],
    ["Saddled bichir","River",4000,12,3,2100,400],
    ["Salmon","River (Mouth)",700,3,3,0,2359],
    ["Saw shark","Sea",12000,12,3,1600,900],
    ["Sea bass","Sea",400,1,12,0,2359],
    ["Sea butterfly","Sea",1000,6,9,0,2359],
    ["Sea horse","Sea",1100,10,5,0,2359],
    ["Snapping turtle","River",5000,10,4,2100,400],
    ["Soft-shelled turtle","River",3750,2,3,1600,900],
    ["Squid","Sea",500,6,2,0,2359],
    ["Stringfish","River (Clifftop)",15000,6,9,1600,900],
    ["Sturgeon","River (Mouth)",10000,3,9,0,2359],
    ["Suckerfish","Sea",1500,12,3,0,2359],
    ["Surgeonfish","Sea",1000,10,3,0,2359],
    ["Sweetfish","River",900,1,3,0,2359],
    ["Tadpole","Pond",100,9,1,0,2359],
    ["Tilapia","River",800,12,4,0,2359],
    ["Tuna","Pier",7000,5,10,0,2359],
    ["Whale shark","Sea",13000,12,3,0,2359],
    ["Yellow perch","River",300,4,9,0,2359],
    ["Zebra turkeyfish","Sea",500,10,5,0,2359]
];

var bugsNorth = [
    ["Name","Location","Price","Month Start","Month End","Time Start","Time End"],
    ["Agrias Butterfly","Flying",3000,4,9,800,1700],
    ["Ant","On rotten food",80,1,12,0,2359],
    ["Atlas Moth","On Trees",3000,4,9,1900,400],
    ["Bagworm","Shaking Trees",600,1,12,0,2359],
    ["Banded Dragonfly","Flying",4500,5,10,800,1700],
    ["Bell Cricket","On the Ground",430,9,10,1700,800],
    ["Blue Weevil beetle","On Trees (Coconut)",800,7,8,0,2359],
    ["Brown Cicada","On Trees",250,7,8,800,1700],
    ["Centipede","Hitting Rocks",300,9,6,1600,2300],
    ["Cicada Shell","On Trees",10,7,8,0,2359],
    ["Citrus Long-horned Beetle","On Tree Stumps",350,1,12,0,2359],
    ["Common Bluebottle","Flying",300,4,8,400,1900],
    ["Common Butterfly","Flying",160,9,6,400,1900],
    ["Cricket","On the Ground",130,9,11,1700,800],
    ["Cyclommatus Stag","On Trees (Coconut)",8000,7,8,1700,800],
    ["Damselfly","Flying",500,11,2,0,2359],
    ["Darner Dragonfly","Flying",230,4,10,800,1700],
    ["Diving Beetle","On Ponds and Rivers",800,5,9,800,1900],
    ["Drone Beetle","On Trees",200,6,8,0,2359],
    ["Dung Beetle","On the Ground (rolling snowballs)",3000,12,2,0,2359],
    ["Earth-boring Dung Beetle","On the Ground",300,7,9,0,2359],
    ["Emperor Butterfly","Flying",4000,12,3,1700,800],
    ["Emperor Butterfly","Flying",4000,6,9,1700,800],
    ["Evening Cicada","On Trees, Morning",550,7,8,400,800],
    ["Evening Cicada","On Trees, Afternoon",550,7,8,1600,1900],
    ["Firefly","Flying",300,6,6,1900,400],
    ["Flea","Villager's Heads",70,4,11,0,2359],
    ["Fly","On Trash Items",60,1,12,0,2359],
    ["Giant Cicada","On Trees",500,7,8,800,1700],
    ["Giant Stag","On Trees",10000,7,8,2300,800],
    ["Giant Water bug","On Ponds and Rivers",2000,4,9,1900,800],
    ["Giraffe Stag","On Trees (Coconut)",12000,7,8,1700,800],
    ["Golden Stag","On Trees (Coconut)",12000,7,8,1700,800],
    ["Goliath Beetle","On Trees (Coconut)",8000,6,9,1700,800],
    ["Grasshopper","On the Ground",160,7,9,800,1700],
    ["Great Purple Emperor","Flying",3000,5,8,400,1900],
    ["Hermit Crab","Beach disguised as Shells",1000,1,12,1900,800],
    ["Honeybee","Flying",200,3,7,800,1700],
    ["Horned Atlas","On Trees (Coconut)",8000,7,8,1700,800],
    ["Horned Dynastid","On Trees",1350,7,8,1700,800],
    ["Horned Elephant","On Trees (Coconut)",8000,7,8,1700,800],
    ["Horned Hercules","On Trees (Coconut)",12000,7,8,1700,800],
    ["Jewel Beetle","On Tree Stumps",2400,4,8,0,2359],
    ["Ladybug","On Flowers",200,3,6,800,1700],
    ["Ladybug","On Flowers",200,10,10,800,1700],
    ["Long Locust","On the Ground",200,4,11,800,1900],
    ["Madagascan Sunset Moth","Flying",2500,4,9,800,1600],
    ["Man-faced Stink Bug","On Flowers",1000,3,10,1900,800],
    ["Mantis","On Flowers",430,3,11,800,1700],
    ["Migratory Locust","On the Ground",600,8,11,800,1900],
    ["Miyama Stag","On Trees",1000,7,8,0,2359],
    ["Mole Cricket","Underground",500,11,5,0,2359],
    ["Monarch Butterfly","Flying",140,9,11,400,1700],
    ["Mosquito","Flying",130,6,9,1700,400],
    ["Moth","Flying by Light",130,1,12,1900,400],
    ["Orchid Mantis","On Flowers (White)",2400,3,11,800,1700],
    ["Paper Kite Butterfly","Flying",1000,1,12,800,1900],
    ["Peacock Butterfly","Flying by Hybrid Flowers",2500,3,6,400,1900],
    ["Pill Bug","Hitting Rocks",250,9,6,2300,1600],
    ["Pondskater","On Ponds and Rivers",130,5,9,800,1900],
    ["Queen Alexandras Birdwing","Flying",4000,5,9,800,1600],
    ["Rainbow Stag","On Trees",6000,6,9,1900,800],
    ["Rajah Brookes Birdwing","Flying",2500,12,2,800,1700],
    ["Rajah Brookes Birdwing","Flying",2500,4,9,800,1700],
    ["Red Dragonfly","Flying",180,9,10,800,1900],
    ["Rice Grasshopper","On the Ground",160,8,11,800,1900],
    ["Robust Cicada","On Trees",300,7,8,800,1700],
    ["Rosalia Batesi Beetle","On Tree Stumps",3000,5,9,0,2359],
    ["Saw Stag","On Trees",2000,7,8,0,2359],
    ["Scarab Beetle","On Trees",10000,7,8,2300,800],
    ["Scorpion","On the Ground",8000,5,10,1900,400],
    ["Snail","On Rocks and Bushes (Rain)",250,1,12,0,2359],
    ["Spider","Shaking Trees",600,1,12,1900,800],
    ["Stinkbug","On Flowers",120,3,10,0,2359],
    ["Tarantula","On the Ground",8000,11,4,1900,400],
    ["Tiger Beetle","On the Ground",1500,2,10,0,2359],
    ["Tiger Butterfly","Flying",240,3,9,400,1900],
    ["Violin Beetle","On Tree Stumps",450,5,6,0,2359],
    ["Violin Beetle","On Tree Stumps",450,9,11,0,2359],
    ["Walker Cicada","On Trees",400,8,9,800,1700],
    ["Walking Leaf","Under Trees Disguised as Leaves",600,7,9,0,2359],
    ["Walking Stick","On Trees, Morning",600,7,11,400,800],
    ["Walking Stick","On Trees, Afternoon",600,7,11,1700,1900],
    ["Wasp","Shaking Trees",2500,1,12,0,2359],
    ["Wharf Roach","On Beach Rocks",200,1,12,0,2359],
    ["Yellow Butterfly","Flying",160,3,6,400,1900],
    ["Yellow Butterfly","Flying",160,9,10,400,1900]
];

var bugsSouth = [
    ["Name","Location","Price","Month Start","Month End","Time Start","Time End"],
    ["Agrias butterfly","Flying",3000,10,3,800,1700],
    ["Ant","On rotten food",80,1,12,0,2359],
    ["Atlas moth","On trees",3000,10,3,1900,400],
    ["Bagworm","Shaking trees",600,1,12,0,2359],
    ["Banded dragonfly","Flying",4500,11,4,800,1700],
    ["Bell cricket","On the ground",430,3,4,1700,800],
    ["Blue weevil beetle","On palm trees",800,1,2,0,2359],
    ["Brown cicada","On trees",250,1,2,800,1700],
    ["Centipede","Hitting rocks",300,3,12,1600,2300],
    ["Cicada shell","On trees",10,1,2,0,2359],
    ["Citrus long-horned beetle","On tree stumps",350,1,12,0,2359],
    ["Common bluebottle","Flying",300,10,2,400,1900],
    ["Common butterfly","Flying",160,3,12,400,1900],
    ["Cricket","On the ground",130,3,5,1700,800],
    ["Cyclommatus stag","On palm trees",8000,1,2,1700,800],
    ["Damselfly","Flying",500,5,8,0,2359],
    ["Darner dragonfly","Flying",230,10,4,800,1700],
    ["Diving beetle","On fresh water",800,11,3,800,1900],
    ["Drone beetle","On trees",200,12,2,0,2359],
    ["Dung beetle","Rolling snowballs along the ground",3000,6,8,0,2359],
    ["Earth-boring dung beetle","On the ground",300,1,3,0,2359],
    ["Emperor butterfly","Flying",4000,12,3,1700,800],
    ["Emperor butterfly","Flying",4000,6,9,1700,800],
    ["Evening cicada, Evening","On trees",550,1,2,1600,1900],
    ["Evening cicada, Morning","On trees",550,1,2,400,800],
    ["Firefly","Flying",300,12,12,1900,400],
    ["Flea","On villagers",70,10,5,0,2359],
    ["Fly","On trash",60,1,12,0,2359],
    ["Giant cicada","On trees",500,1,2,800,1700],
    ["Giant stag","On trees",10000,1,2,2300,800],
    ["Giant water bug","On fresh water",2000,10,3,1900,800],
    ["Giraffe stag","On palm trees",12000,1,2,1700,800],
    ["Golden stag","On palm trees",12000,1,2,1700,800],
    ["Goliath beetle","On palm trees",8000,12,3,1700,800],
    ["Grasshopper","On the ground",160,1,3,800,1700],
    ["Great purple emperor","Flying",3000,11,2,400,1900],
    ["Hermit crab","Disguised as shells",1000,1,12,1900,800],
    ["Honeybee","Flying",200,9,1,800,1700],
    ["Horned atlas","On palm trees",8000,1,2,1700,800],
    ["Horned dynastid","On palm trees",1350,1,2,1700,800],
    ["Horned elephant","On palm trees",8000,1,2,1700,800],
    ["Horned hercules","On palm trees",12000,1,2,1700,800],
    ["Jewel beetle","On tree stumps",2400,10,2,0,2359],
    ["Ladybug","On flowers",200,4,4,800,1700],
    ["Ladybug","On flowers",200,9,12,800,1700],
    ["Long locust","On the ground",200,10,5,800,1900],
    ["Madagascan sunset moth","Flying",2500,10,3,800,1600],
    ["Man-faced stink bug","On flowers",1000,9,4,1900,800],
    ["Mantis","On flowers",430,9,5,800,1700],
    ["Migratory locust","On the ground",600,2,5,800,1900],
    ["Miyama stag","On trees",1000,1,2,0,2359],
    ["Mole cricket","Underground",500,5,11,0,2359],
    ["Monarch butterfly","Flying",140,3,5,400,1700],
    ["Mosquito","Flying",130,12,3,1700,400],
    ["Moth","Flying near light sources",130,1,12,1900,400],
    ["Orchid mantis","On white flowers",2400,9,5,800,1700],
    ["Paper kite butterfly","Flying",1000,1,12,800,1900],
    ["Peacock butterfly","Flying by hybrid flowers",2500,9,12,400,1900],
    ["Pill bug","Hitting rocks",250,3,12,2300,1600],
    ["Pondskater","On fresh water",130,11,3,800,1900],
    ["Queen Alexandra's birdwing","Flying",4000,11,3,800,1600],
    ["Rainbow stag","On trees",6000,12,3,1900,800],
    ["Rajah Brooke's birdwing","Flying",2500,10,3,800,1700],
    ["Rajah Brooke's birdwing","Flying",2500,6,8,800,1700],
    ["Red dragonfly","Flying",180,3,4,800,1900],
    ["Rice grasshopper","On the ground",160,2,5,800,1900],
    ["Robust cicada","On trees",300,1,2,800,1700],
    ["Rosalia batesi beetle","On tree stumps",3000,11,3,0,2359],
    ["Saw stag","On trees",2000,1,2,0,2359],
    ["Scarab beetle","On trees",10000,1,2,2300,800],
    ["Scorpion","On the ground",8000,11,4,1900,400],
    ["Snail","On rocks and bushes (Rain)",250,1,12,0,2359],
    ["Spider","Shaking trees",480,1,12,1900,800],
    ["Stinkbug","On flowers",120,9,4,0,2359],
    ["Tarantula","On the ground",8000,5,10,1900,400],
    ["Tiger beetle","On the ground",1500,8,4,0,2359],
    ["Tiger butterfly","Flying",240,9,3,400,1900],
    ["Violin beetle","On tree stumps",450,3,5,0,2359],
    ["Violin beetle","On tree stumps",450,11,12,0,2359],
    ["Walker cicada","On trees",400,2,3,800,1700],
    ["Walking leaf","Disguised as leaves",600,1,3,0,2359],
    ["Walking stick, Evening","On trees",600,1,5,1700,1900],
    ["Walking stick, Morning","On trees",600,1,5,400,800],
    ["Wasp","Shaking trees",2500,1,12,0,2359],
    ["Wharf roach","On rocks at the beach",200,1,12,0,2359],
    ["Yellow butterfly","Flying",160,3,4,400,1900],
    ["Yellow butterfly","Flying",160,9,12,400,1900]
];

var creaturesNorth = [
    ["Name","Location","Price","Month Start","Month End","Time Start","Time End"],
    ["Acorn Barnacle","Tiny",600,1,12,0,2359],
    ["Chambered Nautilus","Medium",1800,3,6,1600,900],
    ["Chambered Nautilus","Medium",1800,9,11,1600,900],
    ["Dungeness Crab","Medium",1900,11,5,0,2359],
    ["Firefly Squid","Tiny",1400,3,6,2100,400],
    ["Flatworm","Tiny",700,8,9,1600,900],
    ["Gazami Crab","Medium",2200,6,11,0,2359],
    ["Giant Isopod","Medium, Morning",12000,7,10,900,1600],
    ["Giant Isopod","Medium, Evening",12000,7,10,2100,400],
    ["Gigas Giant Clam","Huge",15000,5,9,0,2359],
    ["Horseshoe Crab","Medium",2500,7,9,2100,400],
    ["Lobster","Large",4500,12,1,0,2359],
    ["Lobster","Large",4500,4,6,0,2359],
    ["Mantis Shrimp","Small",2500,1,12,1600,900],
    ["Moon Jellyfish","Small",600,7,9,0,2359],
    ["Mussel","Small",1500,6,12,0,2359],
    ["Octopus","Medium",1200,1,12,0,2359],
    ["Oyster","Small",1100,9,2,0,2359],
    ["Pearl Oyster","Medium",2800,1,12,0,2359],
    ["Red King Crab","Large",8000,11,3,0,2359],
    ["Scallop","Medium",1200,1,12,0,2359],
    ["Sea Anemone","Large",500,1,12,0,2359],
    ["Sea Cucumber","Medium",500,11,4,0,2359],
    ["Sea Grapes","Small",900,6,9,0,2359],
    ["Sea Pig","Small",10000,11,2,1600,900],
    ["Sea Pineapple","Small",1500,4,8,0,2359],
    ["Sea Slug","Tiny",600,1,12,0,2359],
    ["Sea Star","Small",500,1,12,0,2359],
    ["Sea Urchin","Small",1700,5,9,0,2359],
    ["Seaweed","Large",600,10,7,0,2359],
    ["Slate Pencil Urchin","Medium",2000,5,9,1600,900],
    ["Snow Crab","Large",6000,11,4,0,2359],
    ["Spider Crab","Huge",12000,3,4,0,2359],
    ["Spiny Lobster","Large",5000,10,12,2100,400],
    ["Spotted Garden Eel","Small",1100,5,10,400,2100],
    ["Sweet Shrimp","Small",1400,9,2,1600,900],
    ["Tiger Prawn","Small",3000,6,9,1600,900],
    ["Turban Shell","Small",1000,3,5,0,2359],
    ["Turban Shell","Small",1000,9,12,0,2359],
    ["Umbrella Octopus","Small",6000,3,5,0,2359],
    ["Umbrella Octopus","Small",6000,9,11,0,2359],
    ["Vampire Squid","Medium",10000,5,8,1600,900],
    ["Venus' Flower Basket","Medium",5000,10,2,0,2359],
    ["Whelk","Small",1000,1,12,0,2359]
];

var creaturesSouth = [
    ["Name","Location","Price","Month Start","Month End","Time Start","Time End"],
    ["Abalone","Medium",2000,6,1,1600,900],
    ["Acorn barnacle","Tiny",600,1,12,0,2359],
    ["Chambered nautilus","Medium",1800,3,6,1600,900],
    ["Chambered nautilus","Medium",1800,9,11,1600,900],
    ["Dungeness crab","Medium",1900,11,5,0,2359],
    ["Firefly squid","Tiny",1400,3,6,2100,400],
    ["Flatworm","Tiny",700,8,9,1600,900],
    ["Gazami crab","Medium",2200,6,11,0,2359],
    ["Giant isopod","Medium",12000,7,10,900,1600],
    ["Giant isopod","Medium",12000,7,10,2100,400],
    ["Gigas giant clam","Huge",15000,5,9,0,2359],
    ["Horseshoe Crab","Medium",2500,7,9,2100,400],
    ["Lobster","Large",4500,4,6,0,2359],
    ["Lobster","Large",4500,12,1,0,2359],
    ["Mantis shrimp","Small",2500,1,12,1600,900],
    ["Moon jellyfish","Small",600,7,9,0,2359],
    ["Mussel","Small",1500,6,12,0,2359],
    ["Octopus","Medium",1200,1,12,0,2359],
    ["Oyster","Small",1100,9,2,0,2359],
    ["Pearl oyster","Small",2800,1,12,0,2359],
    ["Red king crab","Large",8000,11,3,0,2359],
    ["Scallop","Medium",1200,1,12,0,2359],
    ["Sea anemone","Large",500,1,12,0,2359],
    ["Sea cucumber","Medium",500,11,4,0,2359],
    ["Sea grapes","Small",900,6,9,0,2359],
    ["Sea pig","Small",10000,11,2,1600,900],
    ["Sea pineapple","Small",1500,4,8,0,2359],
    ["Sea slug","Tiny",600,1,12,0,2359],
    ["Sea star","Small",500,1,12,0,2359],
    ["Sea urchin","Small",1700,5,9,0,2359],
    ["Seaweed","Large",600,10,7,0,2359],
    ["Slate pencil urchin","Medium",2000,5,9,1600,900],
    ["Snow crab","Large",6000,11,4,0,2359],
    ["Spider crab","Huge",12000,3,4,0,2359],
    ["Spiny lobster","Large",5000,10,12,2100,400],
    ["Spotted garden eel","Small",1100,5,10,400,2100],
    ["Sweet shrimp","Small",1400,9,2,1600,900],
    ["Tiger prawn","Small",3000,6,9,1600,900],
    ["Turban shell","Small",1000,3,5,0,2359],
    ["Turban shell","Small",1000,9,12,0,2359],
    ["Umbrella octopus","Small",6000,3,5,0,2359],
    ["Umbrella octopus","Small",6000,9,11,0,2359],
    ["Vampire squid","Medium",10000,5,8,1600,900],
    ["Venus' flower basket","Medium",5000,10,2,0,2359],
    ["Whelk","Small",1000,1,12,0,2359]
];
        
/* -------------------- DATA TABLES-------------------- */

/* -------------------- GLOBAL VARIABLES -------------------- */
var tableNewFish = document.getElementById('newFish').getElementsByTagName('tbody')[0];
var tableOldFish = document.getElementById('oldFish').getElementsByTagName('tbody')[0];
var tableNewBugs = document.getElementById('newBugs').getElementsByTagName('tbody')[0];
var tableOldBugs = document.getElementById('oldBugs').getElementsByTagName('tbody')[0];
var tableNewCreatures = document.getElementById('newCreatures').getElementsByTagName('tbody')[0];
var tableOldCreatures = document.getElementById('oldCreatures').getElementsByTagName('tbody')[0];
var tableFish = document.getElementById('tableFish').getElementsByTagName('tbody')[0];
var tableBugs = document.getElementById('tableBugs').getElementsByTagName('tbody')[0];
var tableCreatures = document.getElementById('tableCreatures').getElementsByTagName('tbody')[0];

/* -------------------- GLOBAL VARIABLES -------------------- */

/* -------------------- NORTHERN HEMISPHERE -------------------- */
function north() {
    var zone = document.getElementById('dataLoad').innerHTML = "Northern Hemisphere";

    /* -------------------- CLEAR PREVIOUS DATA -------------------- */
    $("tbody tr").remove();
    /* -------------------- CLEAR PREVIOUS DATA -------------------- */


    /* -------------------- NEW FISH -------------------- */
    for (var i = 1; i < fishNorth.length; i++) {
        if (fishNorth[i][3] == currentMonth) {
            var newRow = tableNewFish.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = fishNorth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = fishNorth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Fish/" + fishNorth[i][0] + ".png' alt='" + fishNorth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- NEW FISH -------------------- */

    /* -------------------- NEW BUGS -------------------- */
    for (var i = 1; i < bugsNorth.length; i++) {
        if (bugsNorth[i][3] == currentMonth) {
            var newRow = tableNewBugs.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = bugsNorth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = bugsNorth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Bugs/" + bugsNorth[i][0] + ".png' alt='" + bugsNorth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- NEW BUGS -------------------- */

    /* -------------------- NEW CREATURES -------------------- */
    for (var i = 1; i < creaturesNorth.length; i++) {
        if (creaturesNorth[i][3] == currentMonth) {
            var newRow = tableNewCreatures.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = creaturesNorth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = creaturesNorth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Creatures/" + creaturesNorth[i][0] + ".png' alt='" + creaturesNorth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- NEW CREATURES -------------------- */

    /* -------------------- OLD FISH -------------------- */
    for (var i = 1; i < fishNorth.length; i++) {
        if (fishNorth[i][4] == currentMonth) {
            var newRow = tableOldFish.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = fishNorth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = fishNorth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Fish/" + fishNorth[i][0] + ".png' alt='" + fishNorth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- OLD FISH -------------------- */

    /* -------------------- OLD BUGS -------------------- */
    for (var i = 1; i < bugsNorth.length; i++) {
        if (bugsNorth[i][4] == currentMonth) {
            var newRow = tableOldBugs.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = bugsNorth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = bugsNorth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Bugs/" + bugsNorth[i][0] + ".png' alt='" + bugsNorth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- OLD BUGS -------------------- */

    /* -------------------- OLD CREATURES -------------------- */
    for (var i = 1; i < creaturesNorth.length; i++) {
        if (creaturesNorth[i][4] == currentMonth) {
            var newRow = tableOldCreatures.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = creaturesNorth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = creaturesNorth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Creatures/" + creaturesNorth[i][0] + ".png' alt='" + creaturesNorth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- OLD CREATURES -------------------- */

    /* -------------------- COMPLETE FISH -------------------- */
    //Checks Date and Time for Fish
    for (var i = 1; i < fishNorth.length; i++) {
        //If statement for backwards month range, ex: Oct - Jan
        if (fishNorth[i][3] > fishNorth[i][4]) {
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (fishNorth[i][5] > fishNorth[i][6]) {
                if ((
                    (fishNorth[i][3] <= currentMonth)||(fishNorth[i][4] >= currentMonth))
                    &&
                    ((fishNorth[i][5] >= currentHour)||(fishNorth[i][6] <= currentHour))) {
                        console.log(fishNorth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishNorth[i][0] + ".png' alt='" + fishNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    }
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                (   fishNorth[i][3] <= currentMonth)||(fishNorth[i][4] >= currentMonth)) //3   11 - 4
                    &&
                    ((fishNorth[i][5] <= currentHour)&&(fishNorth[i][6] >= currentHour))) {
                        console.log(fishNorth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishNorth[i][0] + ".png' alt='" + fishNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
        };
        //Else statement for regular month range, ex: Mar - Nov
        } else { 
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (fishNorth[i][5] > fishNorth[i][6]) {
                if ((
                    (fishNorth[i][3] <= currentMonth)&&(fishNorth[i][4] >= currentMonth))
                    &&
                    ((fishNorth[i][5] <= currentHour)||(fishNorth[i][6] >= currentHour))){  
                        console.log(fishNorth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishNorth[i][0] + ".png' alt='" + fishNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                    (fishNorth[i][3] <= currentMonth)&&(fishNorth[i][4] >= currentMonth))
                    &&
                    ((fishNorth[i][5] <= currentHour)&&(fishNorth[i][6] >= currentHour))) {
                        console.log(fishNorth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishNorth[i][0] + ".png' alt='" + fishNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            };
        };
    };
    /* -------------------- COMPLETE FISH -------------------- */

    /* -------------------- COMPLETE BUGS -------------------- */
    //Checks Date and Time for Bugs
    for (var i = 1; i < bugsNorth.length; i++) {
        //If statement for backwards month range, ex: Oct - Jan
        if (bugsNorth[i][3] > bugsNorth[i][4]) {
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (bugsNorth[i][5] > bugsNorth[i][6]) {
                if ((
                    (bugsNorth[i][3] <= currentMonth)||(bugsNorth[i][4] >= currentMonth))
                    &&
                    ((bugsNorth[i][5] >= currentHour)||(bugsNorth[i][6] <= currentHour))) {
                        console.log(bugsNorth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsNorth[i][0] + ".png' alt='" + bugsNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    }
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                (   bugsNorth[i][3] <= currentMonth)||(bugsNorth[i][4] >= currentMonth)) //3   11 - 4
                    &&
                    ((bugsNorth[i][5] <= currentHour)&&(bugsNorth[i][6] >= currentHour))) {
                        console.log(bugsNorth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsNorth[i][0] + ".png' alt='" + bugsNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
        };
        //Else statement for regular month range, ex: Mar - Nov
        } else { 
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (bugsNorth[i][5] > bugsNorth[i][6]) {
                if ((
                    (bugsNorth[i][3] <= currentMonth)&&(bugsNorth[i][4] >= currentMonth))
                    &&
                    ((bugsNorth[i][5] <= currentHour)||(bugsNorth[i][6] >= currentHour))){  
                        console.log(bugsNorth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsNorth[i][0] + ".png' alt='" + bugsNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                    (bugsNorth[i][3] <= currentMonth)&&(bugsNorth[i][4] >= currentMonth))
                    &&
                    ((bugsNorth[i][5] <= currentHour)&&(bugsNorth[i][6] >= currentHour))) {
                        console.log(bugsNorth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsNorth[i][0] + ".png' alt='" + bugsNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            };
        };
    };
    /* -------------------- COMPLETE BUGS -------------------- */

    /* -------------------- COMPLETE CREATURES -------------------- */
    //Checks Date and Time for Bugs
    for (var i = 1; i < creaturesNorth.length; i++) {
        //If statement for backwards month range, ex: Oct - Jan
        if (creaturesNorth[i][3] >creaturesNorth[i][4]) {
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (creaturesNorth[i][5] >creaturesNorth[i][6]) {
                if ((
                    (creaturesNorth[i][3] <= currentMonth)||(creaturesNorth[i][4] >= currentMonth))
                    &&
                    ((creaturesNorth[i][5] >= currentHour)||(creaturesNorth[i][6] <= currentHour))) {
                        console.log(creaturesNorth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesNorth[i][0] + ".png' alt='" + creaturesNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    }
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                (   creaturesNorth[i][3] <= currentMonth)||(creaturesNorth[i][4] >= currentMonth)) //3   11 - 4
                    &&
                    ((creaturesNorth[i][5] <= currentHour)&&(creaturesNorth[i][6] >= currentHour))) {
                        console.log(creaturesNorth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesNorth[i][0] + ".png' alt='" + creaturesNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
        };
        //Else statement for regular month range, ex: Mar - Nov
        } else { 
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (creaturesNorth[i][5] > creaturesNorth[i][6]) {
                if ((
                    (creaturesNorth[i][3] <= currentMonth)&&(creaturesNorth[i][4] >= currentMonth))
                    &&
                    ((creaturesNorth[i][5] <= currentHour)||(creaturesNorth[i][6] >= currentHour))){  
                        console.log(creaturesNorth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesNorth[i][0] + ".png' alt='" + creaturesNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                    (creaturesNorth[i][3] <= currentMonth)&&(creaturesNorth[i][4] >= currentMonth))
                    &&
                    ((creaturesNorth[i][5] <= currentHour)&&(creaturesNorth[i][6] >= currentHour))) {
                        console.log(creaturesNorth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesNorth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesNorth[i][0] + ".png' alt='" + creaturesNorth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            };
        };
    };
    /* -------------------- COMPLETE CREATURES -------------------- */
}
/* -------------------- NORTHERN HEMISPHERE -------------------- */

/* -------------------- SOUTHERN HEMISPHERE -------------------- */
function south() {
    var zone = document.getElementById('dataLoad').innerHTML = "Southern Hemisphere";

    /* -------------------- CLEAR PREVIOUS DATA -------------------- */
    $("tbody tr").remove();
    /* -------------------- CLEAR PREVIOUS DATA -------------------- */

    /* -------------------- NEW FISH -------------------- */
    for (var i = 1; i < fishSouth.length; i++) {
        if (fishSouth[i][3] == currentMonth) {
            var newRow = tableNewFish.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = fishSouth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = fishSouth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Fish/" + fishSouth[i][0] + ".png' alt='" + fishSouth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- NEW FISH -------------------- */

    /* -------------------- NEW BUGS -------------------- */
    for (var i = 1; i < bugsSouth.length; i++) {
        if (bugsSouth[i][3] == currentMonth) {
            var newRow = tableNewBugs.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = bugsSouth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = bugsSouth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Bugs/" + bugsSouth[i][0] + ".png' alt='" + bugsNorth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- NEW BUGS -------------------- */

    /* -------------------- NEW CREATURES -------------------- */
    for (var i = 1; i < creaturesSouth.length; i++) {
        if (creaturesSouth[i][3] == currentMonth) {
            var newRow = tableNewCreatures.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = creaturesSouth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = creaturesSouth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Creatures/" + creaturesSouth[i][0] + ".png' alt='" + creaturesSouth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- NEW CREATURES -------------------- */

    /* -------------------- OLD FISH -------------------- */
    for (var i = 1; i < fishSouth.length; i++) {
        if (fishSouth[i][4] == currentMonth) {
            var newRow = tableOldFish.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = fishSouth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = fishSouth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Fish/" + fishSouth[i][0] + ".png' alt='" + fishSouth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- OLD FISH -------------------- */

    /* -------------------- OLD BUGS -------------------- */
    for (var i = 1; i < bugsSouth.length; i++) {
        if (bugsSouth[i][4] == currentMonth) {
            var newRow = tableOldBugs.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = bugsNorth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = bugsSouth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Bugs/" + bugsSouth[i][0] + ".png' alt='" + bugsSouth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- OLD BUGS -------------------- */

    /* -------------------- OLD CREATURES -------------------- */
    for (var i = 1; i < creaturesSouth.length; i++) {
        if (creaturesSouth[i][4] == currentMonth) {
            var newRow = tableOldCreatures.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            cell1.innerHTML = creaturesSouth[i][0];
            cell1.className = "cellLeft";
            cell2.innerHTML = creaturesSouth[i][1];
            cell2.className = "cellCenter";
            cell3.innerHTML = "<img src='images/Creatures/" + creaturesSouth[i][0] + ".png' alt='" + creaturesSouth[i][0] + "'/>";
            cell3.className = "cellRight";
        }
    }
    /* -------------------- OLD CREATURES -------------------- */

    /* -------------------- COMPLETE FISH -------------------- */
    //Checks Date and Time for Fish
    for (var i = 1; i < fishSouth.length; i++) {
        //If statement for backwards month range, ex: Oct - Jan
        if (fishSouth[i][3] > fishSouth[i][4]) {
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (fishSouth[i][5] > fishSouth[i][6]) {
                if ((
                    (fishSouth[i][3] <= currentMonth)||(fishSouth[i][4] >= currentMonth))
                    &&
                    ((fishSouth[i][5] >= currentHour)||(fishSouth[i][6] <= currentHour))) {
                        console.log(fishSouth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishSouth[i][0] + ".png' alt='" + fishSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    }
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                (   fishSouth[i][3] <= currentMonth)||(fishSouth[i][4] >= currentMonth)) //3   11 - 4
                    &&
                    ((fishSouth[i][5] <= currentHour)&&(fishSouth[i][6] >= currentHour))) {
                        console.log(fishSouth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishNorth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishSouth[i][0] + ".png' alt='" + fishSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
        };
        //Else statement for regular month range, ex: Mar - Nov
        } else { 
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (fishSouth[i][5] > fishSouth[i][6]) {
                if ((
                    (fishSouth[i][3] <= currentMonth)&&(fishSouth[i][4] >= currentMonth))
                    &&
                    ((fishSouth[i][5] <= currentHour)||(fishSouth[i][6] >= currentHour))){  
                        console.log(fishSouth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishSouth[i][0] + ".png' alt='" + fishSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                    (fishSouth[i][3] <= currentMonth)&&(fishSouth[i][4] >= currentMonth))
                    &&
                    ((fishSouth[i][5] <= currentHour)&&(fishSouth[i][6] >= currentHour))) {
                        console.log(fishSouth[i][0]);
                        var newRow = tableFish.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = fishSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = fishSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Fish/" + fishSouth[i][0] + ".png' alt='" + fishSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            };
        };
    };
    /* -------------------- COMPLETE FISH -------------------- */

    /* -------------------- COMPLETE BUGS -------------------- */
    //Checks Date and Time for Bugs
    for (var i = 1; i < bugsSouth.length; i++) {
        //If statement for backwards month range, ex: Oct - Jan
        if (bugsSouth[i][3] > bugsSouth[i][4]) {
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (bugsSouth[i][5] > bugsSouth[i][6]) {
                if ((
                    (bugsSouth[i][3] <= currentMonth)||(bugsSouth[i][4] >= currentMonth))
                    &&
                    ((bugsSouth[i][5] >= currentHour)||(bugsSouth[i][6] <= currentHour))) {
                        console.log(bugsSouth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsSouth[i][0] + ".png' alt='" + bugsSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    }
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                (   bugsSouth[i][3] <= currentMonth)||(bugsSouth[i][4] >= currentMonth)) //3   11 - 4
                    &&
                    ((bugsSouth[i][5] <= currentHour)&&(bugsSouth[i][6] >= currentHour))) {
                        console.log(bugsSouth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsSouth[i][0] + ".png' alt='" + bugsSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
        };
        //Else statement for regular month range, ex: Mar - Nov
        } else { 
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (bugsSouth[i][5] > bugsSouth[i][6]) {
                if ((
                    (bugsSouth[i][3] <= currentMonth)&&(bugsSouth[i][4] >= currentMonth))
                    &&
                    ((bugsSouth[i][5] <= currentHour)||(bugsSouth[i][6] >= currentHour))){  
                        console.log(bugsSouth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsSouth[i][0] + ".png' alt='" + bugsSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                    (bugsSouth[i][3] <= currentMonth)&&(bugsSouth[i][4] >= currentMonth))
                    &&
                    ((bugsSouth[i][5] <= currentHour)&&(bugsSouth[i][6] >= currentHour))) {
                        console.log(bugsSouth[i][0]);
                        var newRow = tableBugs.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = bugsSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = bugsSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Bugs/" + bugsSouth[i][0] + ".png' alt='" + bugsSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            };
        };
    };
    /* -------------------- COMPLETE BUGS -------------------- */

    /* -------------------- COMPLETE CREATURES -------------------- */
    //Checks Date and Time for Bugs
    for (var i = 1; i < creaturesSouth.length; i++) {
        //If statement for backwards month range, ex: Oct - Jan
        if (creaturesSouth[i][3] >creaturesSouth[i][4]) {
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (creaturesSouth[i][5] >creaturesSouth[i][6]) {
                if ((
                    (creaturesSouth[i][3] <= currentMonth)||(creaturesSouth[i][4] >= currentMonth))
                    &&
                    ((creaturesSouth[i][5] >= currentHour)||(creaturesSouth[i][6] <= currentHour))) {
                        console.log(creaturesSouth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesSouth[i][0] + ".png' alt='" + creaturesSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    }
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                (   creaturesSouth[i][3] <= currentMonth)||(creaturesSouth[i][4] >= currentMonth)) //3   11 - 4
                    &&
                    ((creaturesNorth[i][5] <= currentHour)&&(creaturesSouth[i][6] >= currentHour))) {
                        console.log(creaturesSouth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesSouth[i][0] + ".png' alt='" + creaturesSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
        };
        //Else statement for regular month range, ex: Mar - Nov
        } else { 
            //If statement for backwards Time Range
            //Example: 23:00 - 08:00
            if (creaturesSouth[i][5] > creaturesSouth[i][6]) {
                if ((
                    (creaturesSouth[i][3] <= currentMonth)&&(creaturesSouth[i][4] >= currentMonth))
                    &&
                    ((creaturesSouth[i][5] <= currentHour)||(creaturesSouth[i][6] >= currentHour))){  
                        console.log(creaturesSouth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesSouth[i][0] + ".png' alt='" + creaturesSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            //Else statement for regular Time Range
            //Example: 12:00 - 20:00
            } else {
                if ((
                    (creaturesSouth[i][3] <= currentMonth)&&(creaturesSouth[i][4] >= currentMonth))
                    &&
                    ((creaturesSouth[i][5] <= currentHour)&&(creaturesSouth[i][6] >= currentHour))) {
                        console.log(creaturesSouth[i][0]);
                        var newRow = tableCreatures.insertRow();
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        cell1.innerHTML = creaturesSouth[i][0];
                        cell1.className = "cellLeft";
                        cell2.innerHTML = creaturesSouth[i][1];
                        cell2.className = "cellCenter";
                        cell3.innerHTML = "<img src='images/Creatures/" + creaturesSouth[i][0] + ".png' alt='" + creaturesSouth[i][0] + "'/>";
                        cell3.className = "cellRight";
                    };
            };
        };
    };
    /* -------------------- COMPLETE CREATURES -------------------- */
}
/* -------------------- SOUTHERN HEMISPHERE -------------------- */

