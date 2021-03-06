function tab(num,types,select){
	var sel = '';
	if(select){
		sel = select;
	}
	if(types=='msg'){
		var html = '';
		$.ajax({
			url: '/yike/manage/msg/msgTable',
			type: 'POST',
			data: {num:num,sel:sel},
			success: function(data){
				if(data.success){
					var aa = data.context.vacation;
					html +='<tr><th><i></i><span>序号</span></th>'+
			'<th>内容</th><th>是否查收</th><th>发送者</th><th>接收者</th>'+
			'<th>发送时间</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td><i data-id="'+ver.id+'"></i><span>'+ver.d+'</span></td>'+
					'<td>'+ver.postMessages+'</td>'+
					'<td>'+ver.status+'</td>'+
					'<td>'+ver.fromUser+'</td>'+
					'<td>'+ver.toUser+'</td>'+
					'<td>'+ver.dateTime+'</td></tr>';
					})
					$('.user-table table').html(html);
				}
				else{
				console.log('返回数据失败');
				}
			},
			error: function(){
				console.log('出现问题');
			}
		});
	}else if(types == 'user'){
		var html = '';
    	$.ajax({
			url: '/yike/manage/user/userTable',
			type: 'POST',
			data: {num:num,sel:sel},
			success: function(data){
				if(data.success){
					var aa = data.context.vacation;
					html +='<tr><th><i></i><span>序号</span></th>'+
				'<th>头像</th><th>用户名</th><th>邮箱</th><th>性别</th><th>生日</th>'+
				'<th>注册时间</th><th>是否在线</th><th>操作</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td>';
					if(ver.admin){
						html +='<span class="admin"></span>';
					}else{
						html +='<i data-id="'+ver.id+'"></i>';
					}
					
					html+='<span>'+ver.d+'</span></td>'+
					'<td><div class="img"><img src="/vacation-photo/'+ver.imgurl+'"></div></td>'+
					'<td>'+ver.name+'</td>'+
					'<td>'+ver.email+'</td>'+
					'<td>'+ver.sex+'</td>'+
					'<td>'+ver.birth+'</td>'+
					'<td>'+ver.registerdate+'</td>'+
					'<td>'+ver.online+'</td>'+
					'<td><span class="cg-psw" data-id="'+ver.id+'">初始密码</span></td></tr>';
					})
					$('.user-table table').html(html);
				}
				else{
				console.log('返回数据失败');
				}
			},
			error: function(){
				console.log('出现问题');
			}
		});	
    }else if(types == 'group'){
    	var html = '';
    	$.ajax({
			url: '/yike/manage/group/groupTable',
			type: 'POST',
			data: {num:num,sel:sel},
			success: function(data){
				if(data.success){
					var aa = data.context.vacation;
					html +='<tr><th><i></i><span>序号</span></th>'+
				'<th>头像</th><th>群名</th><th>创建者</th>'+
				'<th>说明</th><th>注册时间</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td><i data-id="'+ver.id+'"></i><span>'+ver.d+'</span></td>'+
					'<td><img src="/group-photo/'+ver.icon+'"></td>'+
					'<td>'+ver.name+'</td>'+
					'<td>'+ver.admin+'</td>'+
					'<td>'+ver.intro+'</td>'+
					'<td>'+ver.time+'</td></tr>';
					})
					$('.user-table table').html(html);
				}
				else{
				console.log('返回数据失败');
				}
			},
			error: function(){
				console.log('出现问题');
			}
		});
    }else if(types =='grpmsg'){
    	var html = '';
    	$.ajax({
			url: '/yike/manage/grpmsg/msgTable',
			type: 'POST',
			data: {num:num,sel:sel},
			success: function(data){
				if(data.success){
					var aa = data.context.vacation;
					html +='<tr><th><i></i><span>序号</span></th>'+
				'<th>信息内容</th><th>群名</th><th>发送者</th>'+
				'<th>发送时间</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td><i data-id="'+ver.id+'"></i><span>'+ver.d+'</span></td>'+
					'<td>'+ver.content+'</td>'+
					'<td>'+ver.group+'</td>'+
					'<td>'+ver.from+'</td>'+
					'<td>'+ver.time+'</td></tr>';
					})
					$('.user-table table').html(html);
				}
				else{
				console.log('返回数据失败');
				}
			},
			error: function(){
				console.log('出现问题');
			}
		});
    }else if(types == 'friend'){
    	var html = '';
    	$.ajax({
			url: '/yike/manage/friend/frdTable',
			type: 'POST',
			data: {num:num,sel:sel},
			success: function(data){
				if(data.success){
					var aa = data.context.vacation;
					html +='<tr><th><i></i><span>序号</span></th>'+
				'<th>好友</th><th>申请者</th><th>昵称</th>'+
				'<th>添加时间</th><th>是否通过</th><th>最后通话</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td><i data-id="'+ver.id+'"></i><span>'+ver.d+'</span></td>'+
					'<td>'+ver.frd+'</td>'+
					'<td>'+ver.use+'</td>'+
					'<td>'+ver.name+'</td>'+
					'<td>'+ver.time+'</td>'+
					'<td>'+ver.cross+'</td>'+
					'<td>'+ver.lasttime+'</td></tr>';
					})
					$('.user-table table').html(html);
				}
				else{
				console.log('返回数据失败');
				}
			},
			error: function(){
				console.log('出现问题');
			}
		});
    }else if(types == 'grpuser'){
    	var html = '';
    	$.ajax({
			url: '/yike/manage/grpuser/gpuTable',
			type: 'POST',
			data: {num:num,sel:sel},
			success: function(data){
				if(data.success){
					var aa = data.context.vacation;
					html +='<tr><th><i></i><span>序号</span></th>'+
				'<th>群名</th><th>成员名</th><th>昵称</th>'+
				'<th>添加时间</th><th>最后通话</th><th>未读信息</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td><i data-id="'+ver.id+'"></i><span>'+ver.d+'</span></td>'+
					'<td>'+ver.grp+'</td>'+
					'<td>'+ver.use+'</td>'+
					'<td>'+ver.name+'</td>'+
					'<td>'+ver.time+'</td>'+
					'<td>'+ver.lasttime+'</td>'+
					'<td>'+ver.status+'</td></tr>';
					})
					$('.user-table table').html(html);
				}
				else{
				console.log('返回数据失败');
				}
			},
			error: function(){
				console.log('出现问题');
			}
		});
    }
}

//搜索
function search(search,types){
	var html = '';
	$('.user-table').html('<i class="nothing"></i>');
	$.ajax({
		url: '/yike/manage/search/user',
		type: 'POST',
		data: {searchs:search},
		success: function(data){
			if(data.success){
				var aa = data.context.vacation;
				if(aa.length>0){
					html += '<p class="title">用户</p>';
					html +='<table><tr><th><span>序号</span></th>'+
					'<th>头像</th><th>用户名</th><th>邮箱</th><th>性别</th><th>生日</th>'+
					'<th>注册时间</th><th>是否在线</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td>';
					html+='<span>'+ver.d+'</span></td>'+
					'<td><div class="img"><img src="/vacation-photo/'+ver.imgurl+'"></div></td>'+
					'<td>'+ver.name+'</td>'+
					'<td>'+ver.email+'</td>'+
					'<td>'+ver.sex+'</td>'+
					'<td>'+ver.birth+'</td>'+
					'<td>'+ver.registerdate+'</td>'+
					'<td>'+ver.online+'</td></tr>';
					});
					html +='</table>';
					$('.user-table').html(html);
				}
			}else{
				console.log('返回数据失败');
			}
		},
		error: function(){
			console.log('出现问题');
		}
	});        
	$.ajax({
		url: '/yike/manage/search/group',
		type: 'POST',
		data: {searchs:search},
		success: function(data){
			if(data.success){
					var aa = data.context.vacation;
					if(aa.length>0){
					html += '<p class="title">群</p>';
					html +='<table><tr><th><span>序号</span></th>'+
				'<th>头像</th><th>群名</th><th>创建者</th>'+
				'<th>说明</th><th>注册时间</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td><span>'+ver.d+'</span></td>'+
					'<td><img src="/group-photo/'+ver.icon+'"></td>'+
					'<td>'+ver.name+'</td>'+
					'<td>'+ver.admin+'</td>'+
					'<td>'+ver.intro+'</td>'+
					'<td>'+ver.time+'</td></tr>';
					});
					html += '</table>';
					$('.user-table').html(html);
				}
			}
			else{
			console.log('返回数据失败');
			}
		},
		error: function(){
			console.log('出现问题');
		}
	});        
	$.ajax({
		url: '/yike/manage/search/msg',
		type: 'POST',
		data: {searchs:search},
		success: function(data){
			if(data.success){
				var aa = data.context.vacation;
				if(aa.length>0){
					html += '<p class="title">点消息</p>';
					html +='<table><tr><th><span>序号</span></th>'+
			'<th>内容</th><th>是否查收</th><th>发送者</th><th>接收者</th>'+
			'<th>发送时间</th></tr>';
					//console.log(aa);
					aa.map(function(ver){
					html += '<tr><td><span>'+ver.d+'</span></td>'+
					'<td>'+ver.postMessages+'</td>'+
					'<td>'+ver.status+'</td>'+
					'<td>'+ver.fromUser+'</td>'+
					'<td>'+ver.toUser+'</td>'+
					'<td>'+ver.dateTime+'</td></tr>';
					});
					html +='</table>';
					$('.user-table').html(html);
				}
			}
			else{
			console.log('返回数据失败');
			}
		},
		error: function(){
			console.log('出现问题');
		}
	});
	$.ajax({
		url: '/yike/manage/search/grpmsg',
		type: 'POST',
		data: {searchs:search},
		success: function(data){
			if(data.success){
				var aa = data.context.vacation;
				if(aa.length>0){
					html += '<p class="title">群消息</p>';
					html +='<table><tr><th><span>序号</span></th>'+
				'<th>信息内容</th><th>群名</th><th>发送者</th>'+
				'<th>发送时间</th></tr>';
					aa.map(function(ver){
					html += '<tr><td><span>'+ver.d+'</span></td>'+
					'<td>'+ver.content+'</td>'+
					'<td>'+ver.group+'</td>'+
					'<td>'+ver.from+'</td>'+
					'<td>'+ver.time+'</td></tr>';
					});
					html += '</table>';
					$('.user-table').html(html);
				}
			}
			else{
			console.log('返回数据失败');
			}
		},
		error: function(){
			console.log('出现问题');
		}
	});		
}

//修改密码
function changePsw(id){
	$.ajax({
		url: '/yike/manage/user/changePsw',
		type: 'POST',
		data: {id:id},
		success: function(data){
			if(data.success){
				alert('修改成功');
			}else{
				console.log('返回数据失败');
			}
		},
		error: function(){
			console.log('出现问题');
		}
	});      

}