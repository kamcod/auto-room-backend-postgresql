
const instruction = "You have a data of layout and moodboards. You need to show moodboards in a way that, each moodboard has items that you will show in the" +
    "canvas (right panel black border area). ImageURL is given in this items But for the width, height, left and top of this particular item. You first compare this 'mood_Template_ID' of this moodboard with 'mood_Template_ID' from the layouts. Then you will find the item with particular category and " +
    "get width, height, left and top";

const DATA = {
    instruction,
    data: {
        "layout": [
            {
                "items": [
                    {
                        "category": "rug",
                        "height": 516.25,
                        "left": 56,
                        "top": 5,
                        "width": 516.25
                    },
                    {
                        "category": "sofa",
                        "height": 344.3499984741211,
                        "left": 2,
                        "top": 5,
                        "width": 344.3499984741211
                    },
                    {
                        "category": "sofa",
                        "height": 344.3499984741211,
                        "left": 2,
                        "top": 10,
                        "width": 344.3499984741211
                    },
                    {
                        "category": "art",
                        "height": 159.15,
                        "left": 369.85,
                        "top": 17.85,
                        "width": 158.15
                    },
                    {
                        "category": "chair",
                        "height": 176.1600015258789,
                        "left": 349.8399984741211,
                        "top": 219.85999847412108,
                        "width": 176.1600015258789
                    },
                    {
                        "category": "coffee_table",
                        "height": 209.75,
                        "left": 124.85,
                        "top": 231.85,
                        "width": 267.15
                    },
                    {
                        "category": "side_table",
                        "height": 124.11000457763672,
                        "left": 6,
                        "top": 302.2099954223633,
                        "width": 124.11000457763672
                    },
                    {
                        "category": "pillow",
                        "height": 116.625,
                        "left": 403.125,
                        "top": 403.375,
                        "width": 116.625
                    },
                    {
                        "category": "vase",
                        "height": 121.75,
                        "left": 267,
                        "top": 397.25,
                        "width": 121.75
                    }
                ],
                "mood_Template_ID": "72",
                "mood_board_canvas": {
                    "height": "528",
                    "width": "528"
                }
            },
            {
                "items": [
                    {
                        "category": "rug",
                        "height": 516.25,
                        "left": 10,
                        "top": 5,
                        "width": 516.25
                    },
                    {
                        "category": "sofa",
                        "height": 344.3499984741211,
                        "left": 2,
                        "top": 2,
                        "width": 344.3499984741211
                    },
                    {
                        "category": "sofa",
                        "height": 344.3499984741211,
                        "left": 2,
                        "top": 2,
                        "width": 344.3499984741211
                    },
                    {
                        "category": "art",
                        "height": 158.15,
                        "left": 364.85,
                        "top": 17.85,
                        "width": 158.15
                    },
                    {
                        "category": "chair",
                        "height": 176.1600015258789,
                        "left": 348.8399984741211,
                        "top": 215.85999847412108,
                        "width": 176.1600015258789
                    },
                    {
                        "category": "coffee_table",
                        "height": 209.75,
                        "left": 124.85,
                        "top": 231.85,
                        "width": 267.15
                    },
                    {
                        "category": "side_table",
                        "height": 124.11000457763672,
                        "left": 6,
                        "top": 302.2099954223633,
                        "width": 124.11000457763672
                    },
                    {
                        "category": "pillow",
                        "height": 116.625,
                        "left": 403.125,
                        "top": 403.375,
                        "width": 116.625
                    },
                    {
                        "category": "vase",
                        "height": 121.75,
                        "left": 267,
                        "top": 397.25,
                        "width": 121.75
                    }
                ],
                "mood_Template_ID": "73",
                "mood_board_canvas": {
                    "height": "528",
                    "width": "528"
                }
            }
        ],
        "moodboards": [
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/71FjXVv/3a5139ee0299043b-3731-w358-h358-b1-p0.png",
                        "Price": 206,
                        "category": "chair",
                        "id": 137
                    },
                    {
                        "ImageURL": "https://i.ibb.co/7k7jpZs/e0b125ad016661f2-8793-w358-h358-b1-p0.png",
                        "Price": 2193,
                        "category": "sofa",
                        "id": 675
                    },
                    {
                        "ImageURL": "https://i.ibb.co/ySgB9zM/193161da09035f7e-0447-w358-h358-b1-p0.png",
                        "Price": 662,
                        "category": "coffee_table",
                        "id": 1650
                    },
                    {
                        "ImageURL": "https://i.ibb.co/5jq68Lh/c6215ade0ef2b041-4582-w358-h358-b1-p0.png",
                        "Price": 329,
                        "category": "art",
                        "id": 3005
                    },
                    {
                        "ImageURL": "https://i.ibb.co/HDdKB2T/45515463024fdf48-9277-w358-h358-b1-p0.png",
                        "Price": 36,
                        "category": "pillow",
                        "id": 3325
                    },
                    {
                        "ImageURL": "https://i.ibb.co/48yGMXG/d1412fe80abdc568-7340-w358-h358-b1-p0.png",
                        "Price": 356,
                        "category": "vase",
                        "id": 2827
                    },
                    {
                        "ImageURL": "https://i.ibb.co/NTdYbbk/bc4125960c3e367e-6232-w358-h358-b1-p0.png",
                        "Price": 189,
                        "category": "rug",
                        "id": 2727
                    },
                    {
                        "ImageURL": "https://i.ibb.co/j3VVNgx/e451658c0af341dc-5929-w358-h358-b1-p0.png",
                        "Price": 1702,
                        "category": "side_table",
                        "id": 2374
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 65,
                "theme": 9,
                "total_price": 5673
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/FnHnyyL/40d16bce0e033c35-3884-w358-h358-b1-p0.png",
                        "Price": 1270,
                        "category": "chair",
                        "id": 375
                    },
                    {
                        "ImageURL": "https://i.ibb.co/FnDyYRG/5fc1f17800eefef4-1828-w358-h358-b1-p0.png",
                        "Price": 3327,
                        "category": "sofa",
                        "id": 1264
                    },
                    {
                        "ImageURL": "https://i.ibb.co/FDyvBDV/f211400e07575db8-4918-w358-h358-b1-p0.png",
                        "Price": 558,
                        "category": "coffee_table",
                        "id": 1389
                    },
                    {
                        "ImageURL": "https://i.ibb.co/LtxhZdJ/02915fab075c7085-2865-w358-h358-b1-p0.png",
                        "Price": 519,
                        "category": "art",
                        "id": 3002
                    },
                    {
                        "ImageURL": "https://i.ibb.co/GxYL78b/8991ba4c03854ef2-3433-w358-h358-b1-p0.png",
                        "Price": 37,
                        "category": "pillow",
                        "id": 3361
                    },
                    {
                        "ImageURL": "https://i.ibb.co/7S0nfjb/25415b220de945e0-4706-w358-h358-b1-p0.png",
                        "Price": 282,
                        "category": "vase",
                        "id": 2831
                    },
                    {
                        "ImageURL": "https://i.ibb.co/mzytrzG/3cc17dde0ef634bd-4430-w358-h358-b1-p0.png",
                        "Price": 341,
                        "category": "rug",
                        "id": 2679
                    },
                    {
                        "ImageURL": "https://i.ibb.co/Vtbq2y4/50815afc0f4043fa-8418-w358-h358-b1-p0.png",
                        "Price": 82,
                        "category": "side_table",
                        "id": 1842
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 68,
                "theme": 9,
                "total_price": 6416
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/6s21zmL/23b1280802740d8d-8146-w358-h358-b1-p0.png",
                        "Price": 1047,
                        "category": "chair",
                        "id": 191
                    },
                    {
                        "ImageURL": "https://i.ibb.co/cY2cQg6/c6e1f76f02741359-8156-w358-h358-b1-p0.png",
                        "Price": 1249,
                        "category": "sofa",
                        "id": 600
                    },
                    {
                        "ImageURL": "https://i.ibb.co/3sLmx97/4d31343b0e031608-6202-w358-h358-b1-p0.png",
                        "Price": 858,
                        "category": "coffee_table",
                        "id": 1477
                    },
                    {
                        "ImageURL": "https://i.ibb.co/27myp5h/9601641506b8fc18-6075-w358-h358-b1-p0.png",
                        "Price": 56,
                        "category": "art",
                        "id": 2954
                    },
                    {
                        "ImageURL": "https://i.ibb.co/c3wBG9x/67912b4e0926fcf8-4749-w358-h358-b1-p0.png",
                        "Price": 52,
                        "category": "pillow",
                        "id": 3283
                    },
                    {
                        "ImageURL": "https://i.ibb.co/L9D9TFs/b8c1713e04671f97-6121-w358-h358-b1-p0.png",
                        "Price": 28,
                        "category": "vase",
                        "id": 2854
                    },
                    {
                        "ImageURL": "https://i.ibb.co/ZgyxcBG/dd71a1900d2f9be5-2207-w358-h358-b1-p0.png",
                        "Price": 293,
                        "category": "rug",
                        "id": 2720
                    },
                    {
                        "ImageURL": "https://i.ibb.co/Y2HQkb3/41718a7b011566f8-3171-w358-h358-b1-p0.png",
                        "Price": 248,
                        "category": "side_table",
                        "id": 1831
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 60,
                "theme": 9,
                "total_price": 3831
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/k620tp4/03614ac30166610f-4877-w358-h358-b1-p0.png",
                        "Price": 541,
                        "category": "chair",
                        "id": 555
                    },
                    {
                        "ImageURL": "https://i.ibb.co/KGfH7WX/baa1067503d75b7d-9340-w358-h358-b1-p0.png",
                        "Price": 864,
                        "category": "sofa",
                        "id": 1228
                    },
                    {
                        "ImageURL": "https://i.ibb.co/vjSrpDW/abe104cd0d64c02c-1149-w358-h358-b1-p0.png",
                        "Price": 127,
                        "category": "coffee_table",
                        "id": 1745
                    },
                    {
                        "ImageURL": "https://i.ibb.co/CnS8RFH/2531ff740aa6edd9-0020-w358-h358-b1-p0.png",
                        "Price": 840,
                        "category": "art",
                        "id": 2976
                    },
                    {
                        "ImageURL": "https://i.ibb.co/5v6HDjr/326161b4074f2e9f-8109-w358-h358-b1-p0.png",
                        "Price": 50,
                        "category": "pillow",
                        "id": 3348
                    },
                    {
                        "ImageURL": "https://i.ibb.co/NF6wCCt/19a199f0042dda2b-3502-w358-h358-b1-p0.png",
                        "Price": 78,
                        "category": "vase",
                        "id": 2796
                    },
                    {
                        "ImageURL": "https://i.ibb.co/YjpW2x8/722138890ec59f9c-8810-w358-h358-b1-p0.png",
                        "Price": 421,
                        "category": "rug",
                        "id": 2721
                    },
                    {
                        "ImageURL": "https://i.ibb.co/pQCwY45/c371f28e0d8bb0e5-2119-w358-h358-b1-p0.png",
                        "Price": 128,
                        "category": "side_table",
                        "id": 1826
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 67,
                "theme": 9,
                "total_price": 3049
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/HGD4xfL/4461d8bf036b6e1e-1356-w358-h358-b1-p0.png",
                        "Price": 480,
                        "category": "chair",
                        "id": 190
                    },
                    {
                        "ImageURL": "https://i.ibb.co/Lnbk014/0fc1d5bc0ecc95fd-1501-w358-h358-b1-p0.png",
                        "Price": 1532,
                        "category": "sofa",
                        "id": 685
                    },
                    {
                        "ImageURL": "https://i.ibb.co/qyfbymT/98914c420d093660-8205-w358-h358-b1-p0.png",
                        "Price": 666,
                        "category": "coffee_table",
                        "id": 1672
                    },
                    {
                        "ImageURL": "https://i.ibb.co/DMXyTY7/85a164c109d65d06-9997-w358-h358-b1-p0.png",
                        "Price": 1005,
                        "category": "art",
                        "id": 2931
                    },
                    {
                        "ImageURL": "https://i.ibb.co/7K5QNBj/f0c125330f32ef95-4778-w358-h358-b1-p0.png",
                        "Price": 77,
                        "category": "pillow",
                        "id": 3373
                    },
                    {
                        "ImageURL": "https://i.ibb.co/PtLT35w/dd114604042dfa8b-3502-w358-h358-b1-p0.png",
                        "Price": 45,
                        "category": "vase",
                        "id": 2814
                    },
                    {
                        "ImageURL": "https://i.ibb.co/NtD0p94/82613ce50e9668a1-1811-w358-h358-b1-p0.png",
                        "Price": 306,
                        "category": "rug",
                        "id": 2710
                    },
                    {
                        "ImageURL": "https://i.ibb.co/N7z8nk7/4a51ddf5047e76ce-4293-w358-h358-b1-p0.png",
                        "Price": 147,
                        "category": "side_table",
                        "id": 2162
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 25,
                "theme": 9,
                "total_price": 4258
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/1n2Mn62/d331ce0a0a0f6c24-5795-w358-h358-b1-p0.png",
                        "Price": 1355,
                        "category": "chair",
                        "id": 377
                    },
                    {
                        "ImageURL": "https://i.ibb.co/ZxcdjCD/d62171340407df2e-4803-w358-h358-b1-p0.png",
                        "Price": 2819,
                        "category": "sofa",
                        "id": 1060
                    },
                    {
                        "ImageURL": "https://i.ibb.co/BnvpdSg/9b916b3900012c61-8717-w358-h358-b1-p0.png",
                        "Price": 129,
                        "category": "coffee_table",
                        "id": 1506
                    },
                    {
                        "ImageURL": "https://i.ibb.co/wrx87wp/9b71b58c0bd78c98-1060-w358-h358-b1-p0.png",
                        "Price": 440,
                        "category": "art",
                        "id": 2986
                    },
                    {
                        "ImageURL": "https://i.ibb.co/hY4W7B2/5251f46f0b6c5d28-6948-w358-h358-b1-p0.png",
                        "Price": 41,
                        "category": "pillow",
                        "id": 3312
                    },
                    {
                        "ImageURL": "https://i.ibb.co/JsKmyMy/57b13b1702e44508-3292-w358-h358-b1-p0.png",
                        "Price": 85,
                        "category": "vase",
                        "id": 2786
                    },
                    {
                        "ImageURL": "https://i.ibb.co/VCY828m/24013a3f0d38a838-8398-w358-h358-b1-p0.png",
                        "Price": 321,
                        "category": "rug",
                        "id": 2740
                    },
                    {
                        "ImageURL": "https://i.ibb.co/KqjbGTS/1581516403776d1a-5552-w358-h358-b1-p0.png",
                        "Price": 149,
                        "category": "side_table",
                        "id": 2432
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 30,
                "theme": 9,
                "total_price": 5339
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/ZSYqG0j/76a1a1460eb6371a-3848-w358-h358-b1-p0.png",
                        "Price": 1202,
                        "category": "chair",
                        "id": 548
                    },
                    {
                        "ImageURL": "https://i.ibb.co/m0b7DHz/b111af9202741489-0755-w358-h358-b1-p0.png",
                        "Price": 1686,
                        "category": "sofa",
                        "id": 840
                    },
                    {
                        "ImageURL": "https://i.ibb.co/jDLpNsM/7b014bc802740c6b-2317-w358-h358-b1-p0.png",
                        "Price": 928,
                        "category": "coffee_table",
                        "id": 1547
                    },
                    {
                        "ImageURL": "https://i.ibb.co/MZY6CpB/69e1b3450a07dc91-4405-w358-h358-b1-p0.png",
                        "Price": 676,
                        "category": "art",
                        "id": 2972
                    },
                    {
                        "ImageURL": "https://i.ibb.co/H2QcTsG/c281eac30c37cfe3-4278-w358-h358-b1-p0.png",
                        "Price": 49,
                        "category": "pillow",
                        "id": 3335
                    },
                    {
                        "ImageURL": "https://i.ibb.co/0YGj3cF/0a811b3a03c6756a-8427-w358-h358-b1-p0.png",
                        "Price": 66,
                        "category": "vase",
                        "id": 2843
                    },
                    {
                        "ImageURL": "https://i.ibb.co/Ss9zw5v/ac5145860373d6f4-6033-w358-h358-b1-p0.png",
                        "Price": 240,
                        "category": "rug",
                        "id": 2735
                    },
                    {
                        "ImageURL": "https://i.ibb.co/9gG9ZHg/17c1742201572b9e-2243-w358-h358-b1-p0.png",
                        "Price": 189,
                        "category": "side_table",
                        "id": 2149
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 77,
                "theme": 9,
                "total_price": 5036
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/d4ZBJb4/7ea1ec26005922a9-1624-w358-h358-b1-p0.png",
                        "Price": 210,
                        "category": "chair",
                        "id": 178
                    },
                    {
                        "ImageURL": "https://i.ibb.co/VNbYrvJ/c2018b2300cd2c3e-5667-w358-h358-b1-p0.png",
                        "Price": 439,
                        "category": "sofa",
                        "id": 792
                    },
                    {
                        "ImageURL": "https://i.ibb.co/7j75d1g/f09116a900c90f4d-7684-w358-h358-b1-p0.png",
                        "Price": 132,
                        "category": "coffee_table",
                        "id": 1292
                    },
                    {
                        "ImageURL": "https://i.ibb.co/hcbcY9w/5a31a0ec00dcc616-6118-w358-h358-b1-p0.png",
                        "Price": 303,
                        "category": "art",
                        "id": 2932
                    },
                    {
                        "ImageURL": "https://i.ibb.co/HGDd87g/9051df6e018f3fb0-8362-w358-h358-b1-p0.png",
                        "Price": 40,
                        "category": "pillow",
                        "id": 3309
                    },
                    {
                        "ImageURL": "https://i.ibb.co/FwQ9hqy/1f615061046723a7-6121-w358-h358-b1-p0.png",
                        "Price": 38,
                        "category": "vase",
                        "id": 2849
                    },
                    {
                        "ImageURL": "https://i.ibb.co/R2dkWF2/7791184901b0d921-1875-w358-h358-b1-p0.png",
                        "Price": 519,
                        "category": "rug",
                        "id": 2748
                    },
                    {
                        "ImageURL": "https://i.ibb.co/Sr4kXTX/a5218997063cf262-0130-w358-h358-b1-p0.png",
                        "Price": 78,
                        "category": "side_table",
                        "id": 2192
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 22,
                "theme": 9,
                "total_price": 1759
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/ZG3cH51/cfe153b202ad35be-1119-w358-h358-b1-p0.png",
                        "Price": 490,
                        "category": "chair",
                        "id": 143
                    },
                    {
                        "ImageURL": "https://i.ibb.co/yk6YYLp/bbe12794002b4016-9499-w358-h358-b1-p0.png",
                        "Price": 4767,
                        "category": "sofa",
                        "id": 1043
                    },
                    {
                        "ImageURL": "https://i.ibb.co/3zkFx8X/f0e1261705e75130-2259-w358-h358-b1-p0.png",
                        "Price": 346,
                        "category": "coffee_table",
                        "id": 1401
                    },
                    {
                        "ImageURL": "https://i.ibb.co/q554HBH/40b12aac0bace4c4-9108-w358-h358-b1-p0.png",
                        "Price": 925,
                        "category": "art",
                        "id": 2969
                    },
                    {
                        "ImageURL": "https://i.ibb.co/nmNP4gv/9c01c3020b6c5d36-7782-w358-h358-b1-p0.png",
                        "Price": 41,
                        "category": "pillow",
                        "id": 3321
                    },
                    {
                        "ImageURL": "https://i.ibb.co/nzBFrb9/b061f5e5046720ef-6121-w358-h358-b1-p0.png",
                        "Price": 27,
                        "category": "vase",
                        "id": 2852
                    },
                    {
                        "ImageURL": "https://i.ibb.co/vQQ8h00/dba14b6304baaa0c-9476-w358-h358-b1-p0.png",
                        "Price": 476,
                        "category": "rug",
                        "id": 2730
                    },
                    {
                        "ImageURL": "https://i.ibb.co/ZJ4Bt9k/1c115fcb039b2b16-0481-w358-h358-b1-p0.png",
                        "Price": 295,
                        "category": "side_table",
                        "id": 2462
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 66,
                "theme": 9,
                "total_price": 7367
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/NnJksfG/b4f16113029a31c2-1901-w358-h358-b1-p0.png",
                        "Price": 1079,
                        "category": "chair",
                        "id": 168
                    },
                    {
                        "ImageURL": "https://i.ibb.co/yk6YYLp/bbe12794002b4016-9499-w358-h358-b1-p0.png",
                        "Price": 4767,
                        "category": "sofa",
                        "id": 1043
                    },
                    {
                        "ImageURL": "https://i.ibb.co/FXHLF3S/778118ff0dcaa93d-8884-w358-h358-b1-p0.png",
                        "Price": 121,
                        "category": "coffee_table",
                        "id": 1743
                    },
                    {
                        "ImageURL": "https://i.ibb.co/8BPdW7Y/032194820e6a9889-6887-w358-h358-b1-p0.png",
                        "Price": 354,
                        "category": "art",
                        "id": 2979
                    },
                    {
                        "ImageURL": "https://i.ibb.co/nmNP4gv/9c01c3020b6c5d36-7782-w358-h358-b1-p0.png",
                        "Price": 41,
                        "category": "pillow",
                        "id": 3321
                    },
                    {
                        "ImageURL": "https://i.ibb.co/g37cjDR/bf5128c203e80d2c-2709-w358-h358-b1-p0.png",
                        "Price": 316,
                        "category": "vase",
                        "id": 2825
                    },
                    {
                        "ImageURL": "https://i.ibb.co/XtgZvwc/69812da202deb4e2-9381-w358-h358-b1-p0.png",
                        "Price": 744,
                        "category": "rug",
                        "id": 2718
                    },
                    {
                        "ImageURL": "https://i.ibb.co/Q6ryhQw/580161ad04930182-2653-w358-h358-b1-p0.png",
                        "Price": 121,
                        "category": "side_table",
                        "id": 2053
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 14,
                "theme": 9,
                "total_price": 7543
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/HrVF0rp/97d1a647020e0cd9-7471-w358-h358-b1-p0.png",
                        "Price": 236,
                        "category": "chair",
                        "id": 127
                    },
                    {
                        "ImageURL": "https://i.ibb.co/SBHvW5D/9cc109000e3b8fb4-3215-w358-h358-b1-p0.png",
                        "Price": 1039,
                        "category": "sofa",
                        "id": 837
                    },
                    {
                        "ImageURL": "https://i.ibb.co/p0BB2cR/c831c2110419cb95-1789-w358-h358-b1-p0.png",
                        "Price": 629,
                        "category": "coffee_table",
                        "id": 1781
                    },
                    {
                        "ImageURL": "https://i.ibb.co/CtGgmSX/cef127af0ac26e26-8992-w358-h358-b1-p0.png",
                        "Price": 519,
                        "category": "art",
                        "id": 2998
                    },
                    {
                        "ImageURL": "https://i.ibb.co/Th7KH6N/acf119f802cdcb13-7733-w358-h358-b1-p0.png",
                        "Price": 69,
                        "category": "pillow",
                        "id": 3341
                    },
                    {
                        "ImageURL": "https://i.ibb.co/QCqZXqg/4c912e3500cd95c8-4015-w358-h358-b1-p0.png",
                        "Price": 170,
                        "category": "vase",
                        "id": 2828
                    },
                    {
                        "ImageURL": "https://i.ibb.co/GM3s8ys/33e1dda50afb7962-5978-w358-h358-b1-p0.png",
                        "Price": 476,
                        "category": "rug",
                        "id": 2763
                    },
                    {
                        "ImageURL": "https://i.ibb.co/FhBJMMB/2a9101a8058afc72-1973-w358-h358-b1-p0.png",
                        "Price": 588,
                        "category": "side_table",
                        "id": 2361
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 31,
                "theme": 9,
                "total_price": 3726
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/71FjXVv/3a5139ee0299043b-3731-w358-h358-b1-p0.png",
                        "Price": 206,
                        "category": "chair",
                        "id": 137
                    },
                    {
                        "ImageURL": "https://i.ibb.co/7k7jpZs/e0b125ad016661f2-8793-w358-h358-b1-p0.png",
                        "Price": 2193,
                        "category": "sofa",
                        "id": 675
                    },
                    {
                        "ImageURL": "https://i.ibb.co/ySgB9zM/193161da09035f7e-0447-w358-h358-b1-p0.png",
                        "Price": 662,
                        "category": "coffee_table",
                        "id": 1650
                    },
                    {
                        "ImageURL": "https://i.ibb.co/5jq68Lh/c6215ade0ef2b041-4582-w358-h358-b1-p0.png",
                        "Price": 329,
                        "category": "art",
                        "id": 3005
                    },
                    {
                        "ImageURL": "https://i.ibb.co/HDdKB2T/45515463024fdf48-9277-w358-h358-b1-p0.png",
                        "Price": 36,
                        "category": "pillow",
                        "id": 3325
                    },
                    {
                        "ImageURL": "https://i.ibb.co/48yGMXG/d1412fe80abdc568-7340-w358-h358-b1-p0.png",
                        "Price": 356,
                        "category": "vase",
                        "id": 2827
                    },
                    {
                        "ImageURL": "https://i.ibb.co/NTdYbbk/bc4125960c3e367e-6232-w358-h358-b1-p0.png",
                        "Price": 189,
                        "category": "rug",
                        "id": 2727
                    },
                    {
                        "ImageURL": "https://i.ibb.co/j3VVNgx/e451658c0af341dc-5929-w358-h358-b1-p0.png",
                        "Price": 1702,
                        "category": "side_table",
                        "id": 2374
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 65,
                "theme": 9,
                "total_price": 5673
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/fD5ryWY/b9710c5a0a0f6b0b-5970-w358-h358-b1-p0.png",
                        "Price": 531,
                        "category": "chair",
                        "id": 573
                    },
                    {
                        "ImageURL": "https://i.ibb.co/tC8kWLs/c1510d41096538ad-1740-w358-h358-b1-p0.png",
                        "Price": 4139,
                        "category": "sofa",
                        "id": 1227
                    },
                    {
                        "ImageURL": "https://i.ibb.co/7Km0Tcx/b3e1da690227a9b2-5871-w358-h358-b1-p0.png",
                        "Price": 955,
                        "category": "coffee_table",
                        "id": 1481
                    },
                    {
                        "ImageURL": "https://i.ibb.co/5rWg2YH/e9a121ca0a9588c9-6732-w358-h358-b1-p0.png",
                        "Price": 209,
                        "category": "art",
                        "id": 2917
                    },
                    {
                        "ImageURL": "https://i.ibb.co/4KXNXBB/18017b120a9f329b-9235-w358-h358-b1-p0.png",
                        "Price": 50,
                        "category": "pillow",
                        "id": 3307
                    },
                    {
                        "ImageURL": "https://i.ibb.co/PtLT35w/dd114604042dfa8b-3502-w358-h358-b1-p0.png",
                        "Price": 45,
                        "category": "vase",
                        "id": 2814
                    },
                    {
                        "ImageURL": "https://i.ibb.co/fX6Kb6v/7b815df20c3e3858-6258-w358-h358-b1-p0.png",
                        "Price": 455,
                        "category": "rug",
                        "id": 2695
                    },
                    {
                        "ImageURL": "https://i.ibb.co/kqv595x/cba1471c0f907b6a-4978-w358-h358-b1-p0.png",
                        "Price": 61,
                        "category": "side_table",
                        "id": 2378
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 19,
                "theme": 9,
                "total_price": 6445
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/QKzBRBh/f6313bf800592308-1872-w358-h358-b1-p0.png",
                        "Price": 210,
                        "category": "chair",
                        "id": 194
                    },
                    {
                        "ImageURL": "https://i.ibb.co/B4Fr25G/af510c01027415cf-8149-w358-h358-b1-p0.png",
                        "Price": 1726,
                        "category": "sofa",
                        "id": 830
                    },
                    {
                        "ImageURL": "https://i.ibb.co/FXRc1mJ/0871e8d801fc2fe3-4087-w358-h358-b1-p0.png",
                        "Price": 911,
                        "category": "coffee_table",
                        "id": 1377
                    },
                    {
                        "ImageURL": "https://i.ibb.co/9tScwG5/274136e601ce2e0f-4512-w358-h358-b1-p0.png",
                        "Price": 965,
                        "category": "art",
                        "id": 2943
                    },
                    {
                        "ImageURL": "https://i.ibb.co/ZzsBd7T/14c1034e0854437b-7507-w358-h358-b1-p0.png",
                        "Price": 40,
                        "category": "pillow",
                        "id": 3315
                    },
                    {
                        "ImageURL": "https://i.ibb.co/CBr23Sz/3d8181e403bffa98-1312-w358-h358-b1-p0.png",
                        "Price": 67,
                        "category": "vase",
                        "id": 2805
                    },
                    {
                        "ImageURL": "https://i.ibb.co/BGFCGBm/eb71a9f00c3e19ef-0747-w358-h358-b1-p0.png",
                        "Price": 254,
                        "category": "rug",
                        "id": 2725
                    },
                    {
                        "ImageURL": "https://i.ibb.co/p2W5Sm6/3081513603a94487-8251-w358-h358-b1-p0.png",
                        "Price": 419,
                        "category": "side_table",
                        "id": 1930
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 23,
                "theme": 9,
                "total_price": 4592
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/Ss2pC1s/acf16b4205285953-5398-w358-h358-b1-p0.png",
                        "Price": 693,
                        "category": "chair",
                        "id": 193
                    },
                    {
                        "ImageURL": "https://i.ibb.co/RYwFYVH/58b14fe703d95a68-2433-w358-h358-b1-p0.png",
                        "Price": 1224,
                        "category": "sofa",
                        "id": 678
                    },
                    {
                        "ImageURL": "https://i.ibb.co/s6NSWTT/27413b1f07583c20-2189-w358-h358-b1-p0.png",
                        "Price": 552,
                        "category": "coffee_table",
                        "id": 1456
                    },
                    {
                        "ImageURL": "https://i.ibb.co/bP0DGD6/f2c16b670a303485-7115-w358-h358-b1-p0.png",
                        "Price": 69,
                        "category": "art",
                        "id": 2978
                    },
                    {
                        "ImageURL": "https://i.ibb.co/GPGMJbm/df01214a0cba5ca2-5450-w358-h358-b1-p0.png",
                        "Price": 65,
                        "category": "pillow",
                        "id": 3319
                    },
                    {
                        "ImageURL": "https://i.ibb.co/WvWgXCz/26e1c27c03c8fae2-5248-w358-h358-b1-p0.png",
                        "Price": 174,
                        "category": "vase",
                        "id": 2782
                    },
                    {
                        "ImageURL": "https://i.ibb.co/sJSqCwH/f971adb50373d6ff-4127-w358-h358-b1-p0.png",
                        "Price": 506,
                        "category": "rug",
                        "id": 2741
                    },
                    {
                        "ImageURL": "https://i.ibb.co/WVxhkWw/cb81e7c10402197e-9425-w358-h358-b1-p0.png",
                        "Price": 190,
                        "category": "side_table",
                        "id": 2038
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "73",
                "moodboard_id": 33,
                "theme": 9,
                "total_price": 3473
            },
            {
                "Items": [
                    {
                        "ImageURL": "https://i.ibb.co/SNrKvXg/bd914ac801bcc39f-7603-w358-h358-b1-p0.png",
                        "Price": 741,
                        "category": "chair",
                        "id": 565
                    },
                    {
                        "ImageURL": "https://i.ibb.co/HCw1LGz/31a1ec2803e9031c-7170-w358-h358-b1-p0.png",
                        "Price": 1419,
                        "category": "sofa",
                        "id": 1262
                    },
                    {
                        "ImageURL": "https://i.ibb.co/zRLhrkG/a6f13d8d001005cd-2875-w358-h358-b1-p0.png",
                        "Price": 742,
                        "category": "coffee_table",
                        "id": 1534
                    },
                    {
                        "ImageURL": "https://i.ibb.co/MZY6CpB/69e1b3450a07dc91-4405-w358-h358-b1-p0.png",
                        "Price": 676,
                        "category": "art",
                        "id": 2972
                    },
                    {
                        "ImageURL": "https://i.ibb.co/28ky6Nx/2d7125540f50b387-1553-w358-h358-b1-p0.png",
                        "Price": 64,
                        "category": "pillow",
                        "id": 3296
                    },
                    {
                        "ImageURL": "https://i.ibb.co/7S0nfjb/25415b220de945e0-4706-w358-h358-b1-p0.png",
                        "Price": 282,
                        "category": "vase",
                        "id": 2831
                    },
                    {
                        "ImageURL": "https://i.ibb.co/VWBm3Ty/b63155bd0258a5c2-7021-w358-h358-b1-p0.png",
                        "Price": 533,
                        "category": "rug",
                        "id": 2685
                    },
                    {
                        "ImageURL": "https://i.ibb.co/56J78Lb/02516ba2033f058d-3211-w358-h358-b1-p0.png",
                        "Price": 199,
                        "category": "side_table",
                        "id": 2395
                    }
                ],
                "currency": "SAR",
                "moodboard_Template_ID": "72",
                "moodboard_id": 72,
                "theme": 9,
                "total_price": 4656
            },
        ]
    }
};

export default DATA;
