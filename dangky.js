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


// Kiểm tra thông tin
$("#register").on("submit", function (){
	var iValid=true;
	if($("#name").val().trim() == "")
	{
		$("#name").next('span').text('Bạn chưa nhập tên')
		iValid = false;
	}
	else if(locdau().match(/^\s*[a-zA-Z,\s]+\s*$/) == null)

		{
		$("#name").next('span').text('Bạn nhập sai tên')
		iValid = false;
		}

	else {$("#name").next('span').text('')}
	// if($("#pass").val().trim() == "")
	// {
	// 	$("#pass").next('span').text('Bạn chưa nhập mật khẩu')
	// 	iValid = false;
	// }
	// else if($("#pass").val().match(/^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/) == null)

	// 	{
	// 	$("#pass").next('span').text('Mật khẩu phải có 8 ký tự và kèm 1 số')
	// 	iValid = false;
	// 	}

	// else {$("#pass").next('span').text('')}

	if($("#day").val() == "Ngày")
	{
		$("#year").next('span').text('Bạn chưa chọn ngày sinh')
		iValid = false;
	}
	else if($("#month").val() == "Tháng")
		{
		$("#year").next('span').text('Bạn chưa nhập tháng')
		iValid = false;
		}
	else if($("#year").val() == "Năm sinh")
		{
		$("#year").next('span').text('Bạn chưa chọn năm')
		iValid = false;
		}
	else {$("#year").next('span').text('')}

		//kiểm tra email
	if($("#email").val().trim() == "")
	{
		$("#email").next('span').text('Bạn chưa nhập email')
		iValid = false;
	}
	else if($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null)
	{
		$("#email").next('span').text('Bạn nhập sai địa chỉ email')
		iValid = false;
	}
	else {$("#email").next('span').text('')}

		if($("#facebook").val().trim() == "")
	{
		$("#facebook").next('span').text('Bạn chưa nhập địa chỉ facebook')
		iValid = false;
	}
	else {$("#facebook").next('span').text('')}
		if($("#phone").val().trim() == "")
	{
	//chưa sử lý $("#phone").next('span').add("<i class="fa fa-plus-square" aria-hidden="true"></i>"
 		$("#phone").next('span').text('Bạn chưa nhập số điện thoại')
		iValid = false;
	}
	else if($("#phone").val().match(/^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/) == null)
	{
		$("#phone").next('span').text('Bạn nhập sai số điện thoại')
		iValid = false;
	}
	else {$("#phone").next('span').text('')}

	
	if($("#nam").prop('checked')==false && $("#nu").prop('checked')==false)
		{
		$("#nu").nextAll('span').text('Bạn chưa chọn giới tính')
		iValid = false;
		}
	else {$("#nu").nextAll('span').text('')}
	return iValid;
})


function locdau(){
var str = $("#name").val();
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
}
