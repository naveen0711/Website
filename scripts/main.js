//test js start
$(function () {
    //----- OPEN
    $('[data-popup-open]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
});

//test js end
$(document).ready(function () {
    $(window).scrollTop(0);

    var pageId = location.search.split('=')[1];

    if (pageId == 'page_aboutUs') {
        $("#page_aboutUs").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_contactUs").show();
        $("#page_careers").hide();

        $(window).scrollTop(900);

    }
    $("#aboutUs").click(function () {
        $("#page_aboutUs").show();
        $("#page_home").hide();
        $("#page_the_solution_1").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_the_challenge").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").hide();
        $(window).scrollTop(0);
    });

    $("#why_sagacito").click(function () {
        $("#page_aboutUs").hide();
        $("#page_home").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_the_solution_1").hide();
        $("#page_the_challenge").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").show();
        $(window).scrollTop(0);
    });

    $(".team123").click(function () {
        $("#page_aboutUs").show();
        $("#page_home").hide();
        $("#page_the_solution_1").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_the_challenge").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").hide();
        $("#page_aboutUsPhone").hide();
        $(window).scrollTop(0);
    });

    $(".media123").click(function () {
        $("#page_aboutUs").hide();
        $("#page_home").hide();
        $("#page_media").show();
        $("#page_read_watch").hide();
        $("#page_the_solution_1").hide();
        $("#page_the_challenge").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").hide();
        $("#page_aboutUsPhone").hide();
        $(window).scrollTop(0);
    });

    $(".read123").click(function () {
        $("#page_aboutUs").hide();
        $("#page_aboutUsPhone").hide();
        $("#page_home").hide();
        $("#page_media").hide();
        $("#page_read_watch").show();
        $("#page_the_solution_1").hide();
        $("#page_the_challenge").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").hide();
        $(window).scrollTop(0);
    });

    $("#solution").click(function () {
        $("#page_the_solution_1").show();
        $("#page_home").hide();
        $("#page_aboutUs").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_the_challenge").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").hide();
        $(window).scrollTop(0);
    });

    $("#home").click(function () {
        $("#page_home").show();
        $("#page_aboutUs").hide();
        $("#page_the_solution_1").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_the_challenge").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").hide();
        $(window).scrollTop(0);
    });

    $(".schedule_demo").click(function () {
        document.location.href = "about-us.html?divID=page_aboutUs";
    });

    $("#solution2").click(function () {
        $("#page_the_challenge").show();
        $("#page_aboutUs").hide();
        $("#page_the_solution_1").hide();
        $("#page_home").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_contactUs").hide();
        $("#page_careers").hide();
        $("#page_whySagacito").hide();
        $(window).scrollTop(0);
    });

    $("div.career_block_parent").on("click", "div.apply", function () {
        $("#myJobModal").css("display", "block");
        $("#myJobModal").addClass('in');
    });
    $("#innerButton").click(function () {
        $("#myJobModal").css("display", "block");
        $("#myJobModal").addClass('in');
        $(this).css("background", "#026ecb");
    });
    $("div.career_block_parent2").on("click", "div.apply", function () {
        $("#myJobModal").css("display", "block");
        $("#myJobModal").addClass('in');
    });

    $("#myJobModalClose").click(function () {
        $("#myJobModal").css("display", "none");
    });

    $("div.career_block_parent").on("click", "div.job_read_More", function () {
        var desc_data = $(this).next().html();
        $("#job_description_data").empty();
        $("#job_description_data").append(desc_data);

        var jobTitle = $(this).parent().parent().parent().find('.job_heading').text();
        $("#job_heading_data").empty();
        $("#job_heading_data").append(jobTitle);

        var jobExpe = $(this).parent().parent().parent().find('.job_exp').text();
        $("#job_exp_data").empty();
        $("#job_exp_data").append(jobExpe);

        var jobLoc = $(this).parent().parent().parent().find('.job_place').text();
        $("#job_loc_data").empty();
        $("#job_loc_data").append(jobLoc);

        $("#jobdesc12312").css("display", "block");
        $("#jobdesc12312").addClass('in');
    });
    $("div.career_block_parent2").on("click", "div.job_read_More", function () {
        var desc_data = $(this).next().text();
        $("#job_description_data").empty();
        $("#job_description_data").append(desc_data);
        $("#jobdesc12312").css("display", "block");
        $("#jobdesc12312").addClass('in');
    });

    $("#myJobModalClose").click(function () {
        $("#myJobModal").css("display", "none");
    });


    $(".closeJobModal").click(function () {
        $("#jobdesc12312").css("display", "none");
    });

    $("div.career_block_parent").on("click", "div.job_less_More", function () {
        $(this).parent().hide();
    });

    $("div.career_block_parent2").on("click", "div.job_less_More", function () {
        $(this).parent().hide();
    });


    $(".career123").click(function () {
        function createFriendNode(job_description, job_title, job_exp, job_place, short_desc) {
            // Create the friend node.
            return (
                $("<div class='col-lg-4 col-md-6 col-sm-6 col-xs-12 jobspaddingIn420' style='padding: 10px;'>" +
                    "<div class='career_block col-md-12 col-sm-12 col-xs-12 col-lg-12' style='padding-left: 0px;padding-right:0px'><div class='col-md-12 col-sm-12 col-xs-12 col-lg-12'>" +
                    "<p class='job_heading'>"
                    + job_title +
                    "</p>" + "</div>" +
                    "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>" +
                    "<p class='job_exp'>"
                    + job_exp +
                    "</p>" +
                    "</div>" +
                    "<div class='col-md-12 col-sm-12 col-xs-12 col-lg-12'>" +
                    "<p class='job_place'>"
                    + job_place +
                    "</p>" +
                    "</div>" +
                    "<div class='col-md-12 col-sm-12 col-xs-12 col-lg-12' style='font-size:14px;padding-left: 30px;font-weight: bold;font-family: Raleway;'>Job Summary</div>" +
                    "<div class='col-md-12 col-sm-12 col-xs-12 col-lg-12'>" +
                    " <div class='job_read_More comment more'>" + short_desc +
                    "<span class='read-more-div' id='jobdesc'> Read more...</span></div>" +
                    " <div  hidden>" + job_description +
                    " <div  hidden></div>" +
                    "</div>" +
                    "</div>" +
                    "<div class='stileone col-md-12 col-sm-12 col-xs-12 col-lg-12' style='padding-left: 0px;padding-right: 0px'>" +
                    "<div class='apply'>APPLY</div>" +
                    "</div>" +
                    "</div></div>"
                )
            );
        }

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://sagacito.com:4800/api/job_portal/v1/getJobs",
            "method": "GET"
        }

        $.ajax(settings).done(function (response) {
            console.log(response);

            var jobBody = [];
            var internBody = [];

            $.each(response.results.jobs, function (index, value) {
                var short_desc = response.results.jobs[index].job_desc.substring(99, 200);
                jobBody.push(createFriendNode(response.results.jobs[index].job_desc, response.results.jobs[index].job_title, response.results.jobs[index].job_exp, response.results.jobs[index].job_place, short_desc));
            });

            $.each(response.results.interns, function (index, value) {
                var short_desc = response.results.interns[index].job_desc.substring(55, 100);
                internBody.push(createFriendNode(response.results.interns[index].job_desc, response.results.interns[index].job_title, response.results.interns[index].job_exp, response.results.interns[index].job_place, short_desc));
            });
            $("div.career_block_parent").empty();
            $("div.career_block_parent2").empty();
            $("div.career_block_parent").append(jobBody);
            $("div.career_block_parent2").append(internBody);
        });

        $("#page_contactUs").hide();
        $("#page_aboutUsPhone").hide();
        $("#page_careers").show();
        $("#page_home").hide();
        $("#page_aboutUs").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_the_solution_1").hide();
        $("#page_the_challenge").hide();
        $("#page_whySagacito").hide();

        $(window).scrollTop(0);
    });

    $(".p-mod-detail").click(function () {
        $(".p-mod").show();
        $(".y-max").hide();
        $(".p-gov").hide();
        $(".rev-x").hide();
    });

    $(".p-gov-detail").click(function () {
        $(".p-mod").hide();
        $(".y-max").hide();
        $(".p-gov").show();
        $(".rev-x").hide();
    });

    $(".y-max-detail").click(function () {
        $(".p-mod").hide();
        $(".y-max").show();
        $(".p-gov").hide();
        $(".rev-x").hide();
    });

    $(".rev-x-detail").click(function () {
        $(".p-mod").hide();
        $(".y-max").hide();
        $(".p-gov").hide();
        $(".rev-x").show();
    });

    $("#rev-x-detail2").click(function () {
        $(".p-mod").hide();
        $(".y-max").hide();
        $(".p-gov").hide();
        $(".rev-x").show();
    });

    $(".close_button123").click(function () {
        $(".p-mod").hide();
        $(".y-max").hide();
        $(".p-gov").hide();
        $(".rev-x").hide();
    });

    $(".contact123").click(function () {
        $("#page_contactUs").show();
        $("#page_aboutUsPhone").hide();
        $("#page_the_challenge").hide();
        $("#page_media").hide();
        $("#page_read_watch").hide();
        $("#page_careers").hide();
        $("#page_aboutUs").hide();
        $("#page_the_solution_1").hide();
        $("#page_home").hide();
        $("#page_whySagacito").hide();
        $(window).scrollTop(0);

    });
    function validateEmail(x) {
        // var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            return false;
        }
        return true;
    }
    $("#send_Button").click(function () {
        var name = $("#input_Name")[0].value;
        var email = $("#input_Email")[0].value;
        var number = $("#input_Number")[0].value;
        var address = $("#input_Address")[0].value;

        if (!name && !email) {
            alert('Please, Enter your name and email')
        } else if (!email) {
            alert('Please, Enter your email')
        } else if (!name) {
            alert('Please, Enter your name')
        } else {
            if (validateEmail(email)) {
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://sagacito.com:4800/api/website/v1/query",
                    // "method": "POST",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    "data": {
                        "name": name,
                        "email": email,
                        "number": number,
                        "address": address
                    }
                }

                $.ajax(settings).done(function (response) {
                    $("#input_Name")[0].value = '';
                    $("#input_Email")[0].value = '';
                    $("#input_Number")[0].value = '';
                    $("#input_Address")[0].value = '';
                    var name = response.results.name;
                    alert('Hi,' + name + ' Thank you for contacting Sagacito. We will contact you soon.')
                });
            } else {
                alert('Not a valid e-mail address. Please, Enter correct e-mail address');
            }
        }
    });

    $("#send_Portal_Button").click(function () {
        var job_title = $("#input_Job_Title")[0].value;
        var job_desc = $("#input_Job_Desc")[0].value;
        var job_exp = $("#input_Job_Exp")[0].value;
        var job_place = $("#input_Job_Place")[0].value;
        var job_select = $("#input_Job_Select")[0].value;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://sagacito.com:4800/api/job_portal/v1/add",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                "job_title": job_title,
                "job_desc": job_desc,
                "job_type": job_select,
                "job_exp": job_exp,
                "job_place": job_place
            }
        }

        $.ajax(settings).done(function (response) {
            $("#input_Job_Title")[0].value = '';
            $("#input_Job_Desc")[0].value = '';
            $("#input_Job_Exp")[0].value = '';
            $("#input_Job_Place")[0].value = '';
            $("#input_Job_Select")[0].value = '';
            var name = response.results.name;
            alert('Hi,' + name + ' Thank you for contacting Sagacito. We will contact you soon.')
        });
    });

    $('.employee_box').hover(function () {
        $(this).find('img:first').next().next().show();
        $(this).find('img:first').next().hide();
    }, function () {
        $(this).find('img:first').next().next().hide();
        $(this).find('img:first').next().show();
    });

    $('.employee_box').bind("click touchstart", function () {
        $(this).find('img:first').next().next().toggle();
        $(this).find('img:first').next().toggle();
    });
});

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

$("div.career_block_parent").on("click", "div.apply", function () {
    $(this).css("background", "#026ecb");
});
$("div.career_block_parent2").on("click", "div.apply", function () {
    $(this).css("background", "#026ecb");
});


// $(".button1").click(function () {
//     $(this).parent('.img__description').fadeOut(300); //Close filters drop-downs if user taps on any link in drop-down
// });
// $('.img__wrap img').hover(function (e) {
//     $('.img__description').fadeIn();
//     // e.preventDefault();
// });

//Map
$('.map-container')
    .click(function () {
        $(this).find('iframe').addClass('clicked')
    })
    .mouseleave(function () {
        $(this).find('iframe').removeClass('clicked')
    });


$('.img__wrap img').on("click", function () {
    var currentUser = $(this).data("userid");

    nextpre(currentUser);
});

$('#button-prev').on("click", function () {
    var currentUser = $(this).data("for");

    nextpre(currentUser);
});

$('#button-next').on("click", function () {
    var currentUser = $(this).data("for");

    nextpre(currentUser);
});

function nextpre(currentUserID) {
    if (currentUserID == 1) {
        $("#button-prev").css("display", "none");
    } else {
        $("#button-prev").css("display", "inline-block");
    }

    if (currentUserID == 12) {
        $("#button-next").css("display", "none");
    } else {
        $("#button-next").css("display", "inline-block");
    }


    $("#button-prev").data("for", currentUserID - 1);
    $("#button-prev").data("userid", currentUserID - 1);
    $("#button-next").data("for", currentUserID + 1);
    $("#button-next").data("userid", currentUserID + 1);

    userData(currentUserID);
}


function userData(userID) {
    var dataJSON = {
        "image-1": {
            "name": "RAVI DHARIWAL",
            "designation": "CHAIRMAN",
            "information": "An IIT/K, IIMC alumnus, Ravi started his career with Unilever in India, and, went on to head Soaps marketing when he joined PepsiCo as its first employee in India. He launched Pepsi in India and went on to head the Pepsi beverage business in India, Africa and South East Asia. After 12 years at Pepsi Co, he joined India's largest media company, and, was the Group CEO of the Times Group before retiring in 2015. Currently he Advises, consults and is on the Board of a few companies."
        },
        "image-2": {
            "name": "ARUNABH DAS SHARMA",
            "designation": "CEO & MD",
            "information": "Arunabh has always been passionate about technology and was coding at age 14.He is an alum of IIM Calcutta and Stanford GSB. Arunabh has a passion for Economics and consumer behaviour. His career spans 25 years in industries like CPG, Media, Appliances and technology start ups. He has lived and worked in India,China and the USA. He has served on several boards of large corporations, industry associations and not for profits. An avid follower of sport, Arunabh loves reading fiction."
        },
        "image-3": {
            "name": "MEETA SACHDEV",
            "designation": "CO-FOUNDER & COO",
            "information": "Meeta heads business and operations and is also a co-founder of Sagacito. Meeta has 20 years of work experience across FMCG, Telecom, Media & Retail industries. After graduating in Economics, she completed her MBA from the Faculty of Management Studies, Delhi. A transformation specialist with key skills in the areas of strategy and change management, she has worked in organisations like GSK, Walmart and Bennett, Coleman and company. She is a nature lover, enjoys travelling, reading and watching movies."
        },
        "image-4": {
            "name": "ANKUR NARANG",
            "designation": "TECHNOLOGY MENTOR",
            "information": "Ankur mentors the Technology and Data Science teams and guides the AI strategy of the company. He brings 23+ years of experience	in Senior Technology Leadership positions across MNCs including IBM Research and Sun Microsystems (Oracle), CA, USA. He has 40+ publications in top international conferences and 15 US patents. He has strong passion for technology and machine learning/AI. He completed both BTech and Ph.D. from IIT Delhi in CS&E and M.S. (Santa Clara University, CA). He loves tennis, badminton, singing	and travel."
        },
        "image-5": {
            "name": "PIYUSH JAIN",
            "designation": "HEAD OF ENGINEERING",
            "information": "Piyush Jain is responsible for the engineering and technology stack at Sagacito. Backed by 21 years of technology experience and a grad degree from IITK, Piyush continues to be knowledge hungry and drives the passion with his team to perfect what they are doing. Piyush has been instrumental in building tech stack at Indiabulls in its formation years, lead large teams in varied technologies and has an international exposure with fortune 500 companies. When he is not at office, he may be listening to an audiobook, getting more knowledge or playing with his son."
        },
        "image-6": {
            "name": "YOGESH SHARMA",
            "designation": "CO-FOUNDER & CLIENT PARTNER",
            "information": "After graduating from Delhi College of Engineering at the turn of 3rd millennium, Yogesh went on a world tour working with clients across industries and continents. Somewhere in middle, he took a break from work to pursue his MBA from IIM Ahmedabad and gained rich experience of Strategy, Consulting and Technology. 	Yogesh loves sports and is accomplished at skiing, skating and most ball sports. He loves reading war history, geopolitics and related fiction apart from trying to binge on all movies with IMDB ratings 2.0 and above."
        },
        "image-7": {
            "name": "ANKIT GARG",
            "designation": "CO-FOUNDER & CLIENT PARTNER",
            "information": "Ankit is responsible for Client engagement & solution delivery and part of the core founding team at Sagacito. He has over 10 years of experience in areas of Business strategy, transformation and analytics with organizations like AT Kearney, Times Group, S&P etc. He brings with himself a strong passion for exploring algorithmic and data science driven solutions in the domain of Sales & Pricing management. Described as workaholic by friends & family, he is an avid test cricket fan and a movie buff."
        },
        "image-8": {
            "name": "RAGHAVA SASIKANTH",
            "designation": "LEAD DATA SCIENTIST",
            "information": "Sasikanth has a decade of experience as a software programmer and data scientist with curiosity for data and hunger for higher dimensional data insights. He loves functional programming and category theory. When he is not churning data he is usually busy reading Math or listening to music, in that order."
        },
        "image-9": {
            "name": "PIYUSH RAJESH GUPTA",
            "designation": "PRODUCT MANAGER",
            "information": "Piyush has handled product management for the various products from end to end. He loves to build products with a focus on customer needs and business requirements keeping in mind the technical constraints. Has experience to bring products from concept to market and leveraging quantitative and qualitative data to refine features and boost user experience and business value metrics post-launch. In his personal life, besides being a nature lover he enjoys cycling for long distances and trekking."
        },
        "image-10": {
            "name": "ROHIT JAISWAL",
            "designation": "CLIENT PARTNER",
            "information": "Rohit graduated with an MBA from IIM Calcutta where he specialized in Strategy and Marketing. He has over 6 years of experience in Technology and Media space. Apart from listening to classic rock all day, Rohit loves to daydream, watch sports and read nonfiction."
        },
        "image-11": {
            "name": "RAGHVENDRA SINGH",
            "designation": "USER EXPERIENCE LEAD",
            "information": "Raghvendra's love for design and sensitivity to form and color framed his career aspirations as a designer at a very young age. He enhanced his knowledge and exposure in fashion design with training in lifestyle accessory design from National Institute of Design, Ahmedabad.His involvement in the entire spectrum of the creative process from vision to value is a reflection of his personality.He leverages his understanding of practical functionality to enhance usability."
        },
        "image-12": {
            "name": "JAY PURANIK",
            "designation": "CLIENT PARTNER",
            "information": "After his MBA from IIM Calcutta, Jay worked as a management consultant with Accenture Strategy managing large scale projects for senior client stakeholders from India, Germany, US, UK, Netherlands and Malaysia. Later, he served as the Head of Operations with an educational startup and ramped up their operations from one city to over 35 cities across India, UAE and Malaysia. In his spare time, Jay loves to shoot stationary targets with his 0.177 caliber air pistol and binge watch mind-bending shows and movies. He also loves to read across varied genres across fiction and non-fiction."
        }
    };

    var name = dataJSON["image-" + userID].name;
    var desg = dataJSON["image-" + userID].designation;
    var about = dataJSON["image-" + userID].information;

    $("#user-name").text(name);
    $("#user-desg").text(desg);
    $("#user-infor").text(about);
}