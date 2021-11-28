const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const company = require("./company");
const seller = require("./seller");
const product = require("./product");

//ADD
app.post("/add_company",(req,res) => {
    const companyid = req.body.companyid;
    const name = req.body.name;
    const productid = req.body.productids;
    
    const cname = company.filter((c)=> c.name === name);
    if(cname.length === 0)
    {
        return res.json({ data:"Added Company details succesfully",company_id:companyid,Name:name,Productid:productid});

    }
    else
    {
        return res.json({ data:"Company employee already taken"});
    }
});

app.post("/add_seller",(req,res) => {
    const sellerid = req.body.sellerid;
    const name = req.body.name;
    const productid = req.body.productids;
    
    const sname = seller.filter((sel) => sel.name === name);
    if(sname.length === 0)
    {
        return res.json({ data:"Added Seller details succesfully",seller_id:sellerid,Name:name,Productid:productid});

    }
    else
    {
        return res.json({ data:"Seller employee already taken"});
    }
});

app.post("/add_product",(req,res) => {
    const sellerid = req.body.sellerid;
    const name = req.body.name;
    const title = req.body.title;
    const price = req.body.price;
    const category = req.body.category;
    const companyid = req.body.companyid;
    const productid = req.body.productid;
    
    const pname = product.filter((sel) => sel.name === name);
    if(pname.length === 0)
    {
        return res.json({ data:"Added product details succesfully",seller_id:sellerid,Name:name,Productid:productid,Title:title,Price:price});

    }
    else
    {
        return res.json({ data:"Product ID already taken"});
    }
});

//Retrieve
app.post("/fetch_company",(req,res) => {
    const name = req.body.title;

    
    const pname = product.filter((p)=> (p.title === name));
    if(pname.length === 1)
    {
        const companyid = pname[0].companyid;
        const comp = company.filter((c)=> c.companyid === companyid);
        if(comp.length === 1)
        {
            return res.json({ data:"company details",product_item:name,Company_id:companyid,Company_name:comp[0].name,Product_id:comp[0].productids});
        }

    }
    else
    {
        return res.json({ data:"No Such Company"});
    }
});

app.post("/fetch_seller",(req,res) => {
    const name1 = req.body.title;

    
    const pname = product.filter((p)=> (p.title === name1));
    
    if(pname.length === 1)
    {
        const seller_id = pname[0].sellerid;
        const sell = seller.filter((s)=> (s.sellerid == seller_id));
        //return res.json({ selel:sell[0].sellerid});
        //error
        if(sell.length === 1)
        {
            return res.json({ data:"company details",product_item:name1,Seller_id:seller_id,Seller_name:sell[0].name,Product_id:sell[0].productids});
        }

    }
    else
    {
        return res.json({ data:"No Such seller"});
    }
});

app.post("/fetch_products",(req,res) => {
    const name = req.body.name;
    
    const cname = company.filter((c)=> (c.name === name));
    if(cname.length === 1)
    {
        const productids = cname[0].productids;
        const prod = product.filter((p)=> p.productid == productids);
        if(prod.length === 1)
        {
            return res.json({ data:"company details",CompanyName:name,Products_id:productids,Product_name:prod[0].title,Product_price:prod[0].price});
        }

    }
    else
    {
        return res.json({ data:"No Such Company"});
    }
});

//update
app.post("/update_company",(req,res) => {
    const companyid = req.body.companyid;
    const productid = req.body.productids;
    
    const cname = company.filter((c)=> c.companyid === companyid);
    if(cname.length === 1)
    {
        return res.json({ data:"Updated Company Products succesfully",company_id:companyid,New_Productid:productid});

    }
    else
    {
        return res.json({ data:"Couldn't Update"});
    }
});

app.post("/update_seller",(req,res) => {
    const sellerid = req.body.sellerid;
    const productid = req.body.productids;
    
    const sname = seller.filter((s)=> s.sellerid === sellerid);
    if(sname.length === 1)
    {
        return res.json({ data:"Updated Seller Products succesfully",seller_id:sellerid,New_Productid:productid});

    }
    else
    {
        return res.json({ data:"Couldn't Update"});
    }
});

app.post("/update_product",(req,res) => {
    const category = req.body.category;
    const productid = req.body.productid;
    
    const pname = product.filter((s)=> s.productid === productid);
    if(pname.length === 1)
    {
        return res.json({ data:"Updated Products category succesfully",New_category:category,For_Productid:productid});

    }
    else
    {
        return res.json({ data:"Couldn't Update"});
    }
});

//delete
app.post("/delete_company",(req,res) => {
    const companyid = req.body.companyid;
    
    const cname = company.filter((c)=> c.companyid === companyid);
    if(cname.length === 1)
    {
        return res.json({ data:"Deleted Company succesfully",Deleted:cname[0].name});

    }
    else
    {
        return res.json({ data:"Couldn't Delete"});
    }
});

app.post("/delete_seller",(req,res) => {
    const sellerid = req.body.sellerid;
    
    const sname = seller.filter((s)=> s.sellerid === sellerid);
    if(sname.length === 1)
    {
        return res.json({ data:"Deleted Seller succesfully",Deleted:sname[0].name});

    }
    else
    {
        return res.json({ data:"Couldn't Delete"});
    }
});

app.post("/delete_product",(req,res) => {
    const productid = req.body.productid;
    
    const pname = product.filter((s)=> s.productid === productid);
    if(pname.length === 1)
    {
        return res.json({ data:"Deleted Products succesfully",Deleted:pname[0].title});

    }
    else
    {
        return res.json({ data:"Couldn't Delete"});
    }
});

app.listen(port,()=>console.log("App runing on port 5000"));