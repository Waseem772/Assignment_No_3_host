let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
]

let firstDiv = document.getElementById("firstDiv");
firstDiv.innerHTML = `
<h1>MOBILE DETAILS</h1>
<label for="key">Select Options</label>
<select name="" id="key">
    <option value="default">Default</option>
    <option value="brand">Brand</option>
    <option value="model">Model</option>
    <option value="price">Price</option>
    <option value="camera">Camera</option>
    <option value="ram">Ram</option>
    <option value="rom">Rom</option>
</select>

<label for="value">& </label>
<input type="text" id="value" placeholder="Search">

<button onclick="search()">Search</button>
<button onclxick="deleted()">Delete</button>`


    let search = (() => {
        let KEY = document.getElementById("key").value;
        let value = document.getElementById("value").value;

        value = value.split(" ").join('');


        value = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();

        value =
            value == "Samsunga30" ? "SamsungA30" :
                value == "Samsunga10" ? "SamsungA10" :
                    value == "Samsunga20" ? "SamsungA20" :
                        value == "Vivoy20" ? "VivoY20" :
                            value == "Vivoy15" ? "VivoY15" :
                                value == "Vivoy11" ? "VivoY11" :
                                    value == "Iphonex" ? "IphoneX" : value;




        let result = arr.filter((obj) => {
            const { brand, camera, model, price, ram, rom } = obj;

            if (KEY == "brand" && brand == value) {
              
                return obj
            }
            else if (KEY == "camera" && camera == value) {
                
                return obj
            }
            else if (KEY == "model" && model == value) {
               
                return obj
            }
            else if (KEY == "price" && price == value) {
                
                return obj
            }
            else if (KEY == "ram" && ram == value) {

                return obj
            }
            else if (KEY == "rom" && rom == value) {

                return obj
            }
        })
        console.log(result);

        if (KEY == "default") {
            alert("Please Select the Option");
        }
        else if (result.length === 0) {

            KEY = KEY.slice(0, 1).toUpperCase() + KEY.slice(1).toLowerCase();
            let SecondDiv = document.getElementById("SecondDiv");
            SecondDiv.setAttribute("class", "div2");
            SecondDiv.innerHTML = "";
            SecondDiv.setAttribute("class", "div");
        }

        result.forEach((select_obj) => {
            SecondDiv.innerHTML = "";
            SecondDiv.setAttribute("class", "div");
            const { brand, camera, model, price, ram, rom } = select_obj;
            let thirdDiv = document.getElementById("thirdDiv");
            thirdDiv.setAttribute("class", "div2");
            thirdDiv.innerHTML += `
            <h4 ${brand} </h4>
            <h4>Model: ${model} </h4>
            <h4>Price: ${price} </h4>
            <h4>Camera: ${camera} </h4>
            <h4>Ram: ${ram} </h4>
            <h4> Rom: ${rom}</h4> `
        })
        value = document.getElementById("value").value = "";
    })

    let deleted = (() => {
        thirdDiv.setAttribute("class", "div");
        thirdDiv.innerHTML = "";
        SecondDiv.setAttribute("class", "div");
        SecondDiv.innerHTML = "";
    })


