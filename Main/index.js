// Function Importer
const category_asins = require('./Sub Functions/category_asin_scraper');
const variation_asins = require('./Sub Functions/variation_asin_scraper');

// Variables Declaration
let Main_Json = [];
let parent_asins = [];
let all_promise = [];
let checker_count = 1;
// url
let url = "https://www.amazon.com/gp/bestsellers/home-garden/10749171/ref=pd_zg_hrsr_home-garden";

// App Starter
initiator(url);
async function initiator(url){/*need to add parameter for url*/
    
    let temp_category_asin_obj = await category_asins(url);
    console.log("Temp_obj");
    console.log(temp_category_asin_obj);
    let parent_asin_arr = Object.keys(temp_category_asin_obj);
    await variation_asins(parent_asin_arr,5).then(
        res=>{
            res.forEach(
                c_parent =>{
                    let P_asin = c_parent["M_asin"];
                    c_parent["V_asin"].forEach(
                        v_asin =>{
                            Main_Json.push({
                                "Parent_Asin":P_asin,
                                "Current_Asin":v_asin
                            })
                        }
                    )
                    console.log(Main_Json.length);
                }
            )
        }
    )
    
}
