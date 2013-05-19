// Capa de negocios -JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		
		//Funcionalidad de tomar foto
		$('#regFoto').tap(function(){
			capturaImg();
		});
		
	}, false);
});

//Notificaciones
function pgAlert(tit,com){
	navigator.notification.alert(com, null, tit, "Enterado");
}

// Captura Foto
function capturaImg(){
	//Comienza la captura de una imagen
	navigator.device.capture.captureImage(function(mediaFiles){
		//Imagen capturada
		pgAlert('Captura de Imagen','Foto tomada satisfactoriamente');
		$('#regFoto').attr('ruta',mediaFiles[0].fullPath).css('background-color','#0F0');
		$('#login div[data-role=content] #regSubmit').prepend('<img src="'+mediaFiles[0].fullPath+'" style="width:100%" />');
	},function(err){
		//Error de captura
		pgAlert('Error en captura de foto',err.code);
	}, {limit:1});
}

