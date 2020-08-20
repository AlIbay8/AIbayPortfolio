$(".homeBtn").click(function() {
    $(".homePage").show();
    $(".familyPage").hide();
    $(".lifePage").hide();
    $(".favoritesPage").hide();
    $(".hobbiesPage").hide();
});

$(".familyBtn").click(function() {
    $(".familyPage").show();
    $(".homePage").hide();
    $(".lifePage").hide();
    $(".favoritesPage").hide();
    $(".hobbiesPage").hide();
    $(".achievePage").hide();
});

$(".lifeBtn").click(function() {
    $(".lifePage").show();
    $(".homePage").hide();
    $(".familyPage").hide();
    $(".favoritesPage").hide();
    $(".hobbiesPage").hide();
    $(".achievePage").hide();
});

$(".favBtn").click(function() {
    $(".favoritesPage").show();
    $(".homePage").hide();
    $(".familyPage").hide();
    $(".lifePage").hide();
    $(".hobbiesPage").hide();
    $(".achievePage").hide();
});

$(".hobbiesBtn").click(function() {
    $(".hobbiesPage").show();
    $(".homePage").hide();
    $(".familyPage").hide();
    $(".favoritesPage").hide();
    $(".lifePage").hide();
    $(".achievePage").hide();
});

$(".achieveBtn").click(function() {
  $(".achievePage").show();
    $(".hobbiesPage").hide();
    $(".homePage").hide();
    $(".familyPage").hide();
    $(".favoritesPage").hide();
    $(".lifePage").hide();
});
