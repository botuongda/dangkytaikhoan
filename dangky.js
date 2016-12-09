// ngày
$("#day").html()
var srt= $("#day").html();
for (var i=1; i <= 30; i++){
	$("#day").html("<option>" + i + "</option>");
	srt = srt + $("#day").html();
}
$("#day").html(srt);


// tháng
$("#month").html()
var srt= $("#month").html();
for (var i=1; i <= 12; i++){
	$("#month").html("<option>" + i + "</option>");
	srt = srt + $("#month").html();
}
$("#month").html(srt);


// năm
$("#year").html()
var srt= $("#year").html();
for (var i=1967; i <= 2016; i++){
	$("#year").html("<option>" + i + "</option>");
	srt = srt + $("#year").html();
}
$("#year").html(srt);


// Lấy thông tin	
		var array=["#tendk","#ngaydk","#emaildk","#dienthoaidk","#gioitinhdk"]
		var x=decodeURIComponent(window.location.href);
		var i=x.indexOf("ten");
			x=x.slice(i,x.length);
		var	str=x.split("&");
		var chuoi="";
		var ten=str[0].split("=")[1]
			ten=ten.split("+");
		for (var i = 0; i<ten.length; i++) {
			chuoi += " " + ten[i]
		}
		$(array[0]).html("Tên đăng ký là : " + chuoi);	
		$(array[1]).html("Ngày " + str[1].split("=")[1] + " tháng " + str[2].split("=")[1] + " năm sinh " + str[3].split("=")[1]);		
		$(array[2]).html("Địa chỉ email là: " + str[4].split("=")[1]);
		$(array[3]).html("Số điện thoại : " + str[5].split("=")[1]);
		$(array[4]).html("Giới tính : " + str[6].split("=")[1]);


// "ten=bùi+đức+anh&day=05&month=11&year=1992&email=anhbuiduc893@gmail.com
// &phone=0972893666&gender=nam"