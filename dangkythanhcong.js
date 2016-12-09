// Lấy thông tin	
		var array=["#tendk","#ngaydk","#emaildk","#facebookdk","#dienthoaidk","#gioitinhdk"]
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
		$("#chuchay").html("Chúc mừng bạn - " +chuoi+  " đã đăng ký thành công chuyến du lịch tới Rio de Janeiro")
		$(array[0]).html("Tên đăng ký là : " + chuoi);	
		$(array[1]).html("Ngày " + str[1].split("=")[1] + " tháng " + str[2].split("=")[1] + " năm sinh " + str[3].split("=")[1]);		
		$(array[2]).html("Địa chỉ email là: " + str[4].split("=")[1]);
		$(array[3]).html("Địa chỉ facebook là: " + str[5].split("=")[1]);
		$(array[4]).html("Số điện thoại : " + str[6].split("=")[1]);
		$(array[5]).html("Giới tính : " + str[7].split("=")[1]);


// "ten=bùi+đức+anh&day=05&month=11&year=1992&email=anhbuiduc893@gmail.com
// &phone=0972893666&gender=nam"
