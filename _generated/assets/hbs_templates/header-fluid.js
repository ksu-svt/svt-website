define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<title>KSU Solar</title>\r\n		<link rel=\"stylesheet\" href=\"/assets/css/main.css\">\r\n		<link href=\"https://fonts.googleapis.com/css?family=Lato:100,200\" rel=\"stylesheet\">\r\n		<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.11/css/all.css\" integrity=\"sha384-p2jx59pefphTFIpeqCcISO9MdVfIm4pNnsL08A6v5vaQc4owkQqxMV8kg4Yvhaw/\" crossorigin=\"anonymous\">\r\n		<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\" crossorigin=\"anonymous\"></script>\r\n	</head>\r\n	<body>\r\n"
    + ((stack1 = container.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		<div>\r\n";
},"usePartial":true,"useData":true}); });