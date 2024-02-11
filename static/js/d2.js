var product = [{
    id: 1,
    img: 'https://img.lazcdn.com/g/p/0fadd9ca3545b2819ddf703c0e05f4b7.jpg_720x720q80.jpg',
    name: 'แครอท',
    price: 100,
    description: 'name1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'ผักผล'
}, {
    id: 2,
    img: 'https://img.lazcdn.com/g/p/0fadd9ca3545b2819ddf703c0e05f4b7.jpg_720x720q80.jpg',
    name: 'แครอท',
    price: 100,
    description: 'name1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'ผักผล'
}, {
    id: 3,
    img: 'https://img.lazcdn.com/g/p/0fadd9ca3545b2819ddf703c0e05f4b7.jpg_720x720q80.jpg',
    name: 'แครอท',
    price: 100,
    description: 'name1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'ผักผล'
}, {
    id: 4,
    img: 'https://img.lazcdn.com/g/p/0fadd9ca3545b2819ddf703c0e05f4b7.jpg_720x720q80.jpg',
    name: 'แครอท',
    price: 100,
    description: 'name1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'ผักผล'
}, {
    id: 5,
    img: 'https://img.lazcdn.com/g/p/0fadd9ca3545b2819ddf703c0e05f4b7.jpg_720x720q80.jpg',
    name: 'แครอท',
    price: 100,
    description: 'name1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'ผักผล'
}, {
    id: 6,
    img: 'https://s.isanook.com/wo/0/ud/14/72785/72785-thumbnail.jpg?ip/crop/w670h402/q80/jpg',
    name: 'กะหล่ำปี',
    price: 200,
    description: 'name2 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    type: 'ผักเมืองหนาว'
}, {
    id: 7,
    img: 'https://s.isanook.com/wo/0/ud/14/72785/72785-thumbnail.jpg?ip/crop/w670h402/q80/jpg',
    name: 'กะหล่ำปี',
    price: 200,
    description: 'name2 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    type: 'ผักเมืองหนาว'
}, {
    id: 8,
    img: 'https://s.isanook.com/wo/0/ud/14/72785/72785-thumbnail.jpg?ip/crop/w670h402/q80/jpg',
    name: 'กะหล่ำปี',
    price: 200,
    description: 'name2 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    type: 'ผักเมืองหนาว'
}, {
    id: 9,
    img: 'https://s.isanook.com/wo/0/ud/14/72785/72785-thumbnail.jpg?ip/crop/w670h402/q80/jpg',
    name: 'กะหล่ำปี',
    price: 200,
    description: 'name2 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    type: 'ผักเมืองหนาว'
}, {
    id: 10,
    img: 'https://www.thai-thaifood.com/bilder/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B9%89%E0%B8%87.jpg',
    name: 'ผักบุ้ง',
    price: 300,
    description: 'name3 ccccccccccccccccccccccccccccccccccc',
    type: 'ผักใบเขียว'
}, {
    id: 11,
    img: 'https://www.thai-thaifood.com/bilder/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B9%89%E0%B8%87.jpg',
    name: 'ผักบุ้ง',
    price: 300,
    description: 'name3 ccccccccccccccccccccccccccccccccccc',
    type: 'ผักใบเขียว'
}, {
    id: 12,
    img: 'https://www.thai-thaifood.com/bilder/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B9%89%E0%B8%87.jpg',
    name: 'ผักบุ้ง',
    price: 300,
    description: 'name3 ccccccccccccccccccccccccccccccccccc',
    type: 'ผักใบเขียว'
}, {
    id: 13,
    img: 'https://www.thai-thaifood.com/bilder/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B9%89%E0%B8%87.jpg',
    name: 'ผักบุ้ง',
    price: 300,
    description: 'name3 ccccccccccccccccccccccccccccccccccc',
    type: 'ผักใบเขียว'
}, {
    id: 14,
    img: 'https://www.thai-thaifood.com/bilder/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B9%89%E0%B8%87.jpg',
    name: 'ผักบุ้ง',
    price: 300,
    description: 'name3 ccccccccccccccccccccccccccccccccccc',
    type: 'ผักใบเขียว'
}
];

$(document).ready(() => {
    var html = '';
    //i=0
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openproduct(${i})" class="product-items ${product[i].type}">
                    
                    <img class="img-size" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 1.2vw;">${product[i].price} THB</p>
                    </a>
                </div>`;
    }
    $("#productlist").html(html);
})  

function searchsomething(elem) {
   // console.log(elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openproduct(${i})" class="product-items ${product[i].type}">
                        
                        <img class="img-size" src="${product[i].img}" alt="a">
                        <p style="font-size: 1.2vw;">${product[i].name}</p>
                        <p style="font-size: 1.2vw;">${product[i].price} THB</p>
                        </a>
                    </div>`;
        }
       

    }
    if(html == '') {
        $("#productlist").html(`<p>Not found product</p>`);
    }
    else {
        $("#productlist").html(html);
    }

    
}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openproduct(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name);
    $("#mdd-price").text(`${product[index].price} THB`);
    $("#mdd-desc").text(product[index].descriptio);

}

function closemodal() {
    $(".modal").css('display', 'none')
}

var cart = [];
function addtocart() {
    var pass = true;
    //กดสั่งเมื่อไม่เจอตำปหน้งซ้ำก็ไปต่อ

    for (let i = 0; i < cart.length; i++) {
        if(productindex == cart[i].index) {
            console.log('found same product')
    //เมื่อสั่งซื้อเจอเมนูซ้ำก็ทำการบวกเป็น 2 3 4 ไปเรื่อยๆ
            cart[i].count++;
    //ก็จะเป็น false ก็จะไม่เป็นเพิ่มอาเรตัวใหม่
            pass= false;

        }
    }
    //จากข้่งบน ก็ทำการเข้าอาเรเลย
    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        //console.log(obj)
        cart.push(obj)
    }

    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add' + product[productindex].name + ' KUY สั่งเพิ่มดิ ???'
    })
    $("#cartcount").css('display', 'flex').text(cart.length)
}

function opencart() {
    $('#modalcart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="buy-items">
                        <div class="buy-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="buy-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${cart[i].price * cart[i].count} THB</p>
                                
                            </div>
                        </div>

                        <div class="buy-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}"style="margin: 0 10px">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
            
        }
        $("#buy").html(html)
    }
    else {
        $("#buy").html(`<p>Not found product</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'KUY จะเอาออกไรจริงจัง ???',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'delete',
                    cancelButtonText: 'Cancel'
                })
                .then((res) => {
                    if(res.isConfirmed) {
                        cart.splice(index, 1)
                        console.log(cart)
                        rendercart();
                        $("#cartcount").css('display', 'flex').text(cart.length)

                        if(cart.length <= 0) {
                            $("#cartcount").css('display', 'none')
                        }
                    }
                    else {
                        cart[index].count++;
                        $("#countitems"+index).text(cart[index].count)

                    }


                })
                

            }
        }
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)

    }

}
