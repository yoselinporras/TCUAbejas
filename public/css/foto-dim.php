<?php 
header("Content-type: text/css");
echo "@charset \"utf-8\";\n/* CSS Document */\n\n";

require_once "../../../utiles/funciones.php";
include "../../../configuracion/configuracion.php";

if(isset($_GET['resolution']))
	$resolution = $_GET['resolution'];
else
	$resolution = "large";
if(isset($_GET['class_count']))
	$class_count = $_GET['class_count'];
	
include $resolution.".php";

switch($resolution)
{
	case "xx-large":
		$espacio = 25;
	break;
	case "x-large":
		$espacio = 25;
	break;
	case "large":
		$espacio = 20;
	break;
	case "medium":
		$espacio = 15;
	break;
}

if(isset($class_count))
{

	reset($_GET);	// $_Get #1
	next($_GET);    // $_Get #2

	for($i = 0; $i < $class_count; $i++)
	{
		next($_GET);
		$id = current($_GET);
		next($_GET);
		$align = current($_GET);
		next($_GET);
		$imagen1 = "";
		$imagen1 = current($_GET);
		$imagen1 = str_replace("%2F", "/", $imagen1);		
		$imagen_sinano = substr($imagen1,5);
		
		$imagen = $SALIDA['URL_BASE']."medios/fotos/".$resolution."/".$imagen1;
		$imagen_full = $SALIDA['URL_BASE']."medios/fotos/x-large/".$imagen1;
		$imagen_local = $SALIDA['UBICACION_LOCAL']."/medios/fotos/".$resolution."/".$imagen1;
		$imagen_local_full = $SALIDA['UBICACION_LOCAL']."/medios/fotos/x-large/".$imagen1;
		
		if(!file_exists($imagen_local))
		{
			$original = $SALIDA['UBICACION_LOCAL']."/medios/fotos/".$imagen1;		
			if(file_exists($original))
			{			
				require_once "../../../utiles/thumbnails.php";
				require_once "../../../utiles/ftp.php";			
				$imagen_temporal = $SALIDA['UBICACION_LOCAL']."/cache/temporales/".$imagen_sinano;
				list($width, $height, $type, $attr) = getimagesize($original);
				if($width >= $height)
					$res = create_thumbnail($original, $imagen_temporal, $dim1_img_secundaria, $dim2_img_secundaria, $UBICACION_CONVERT_IM);
				else
					$res = create_thumbnail($original, $imagen_temporal, $dim2_img_secundaria, $dim1_img_secundaria, $UBICACION_CONVERT_IM);
					
				if($res)
				{
					$ftp_id = conectar_FTP($SERVIDOR_FTP, $USUARIO_FTP_MEDIOS, $CLAVE_FTP_MEDIOS);		
					if($ftp_id)
					{
						ftp_chdir($ftp_id, "./fotos/".$resolution."/".substr($imagen1,0,5));
						subir_archivo_FTP($imagen_temporal, $imagen_sinano, $ftp_id, "foto");
						cerrar_FTP($ftp_id);					
					}
					unlink($imagen_temporal);
				}			
			}
			if(!isset($res))
			{
				$imagen = $SALIDA['URL_BASE']."plantillas/".$SALIDA['PLANTILLA']."/imagenes/".$resolution."/ucr_promo.png";
				$imagen_local = $SALIDA['UBICACION_LOCAL']."/plantillas/".$SALIDA['PLANTILLA']."/imagenes/".$resolution."/ucr_promo.png";
			}		
			
		}		
		
		list($width, $height, $type, $attr) = getimagesize($imagen_local);
		list($widthf, $heightf, $type, $attr) = getimagesize($imagen_local_full);
		
		echo "
div.interna.fo-".$id."
{	
	display:block;
	width:".($width + $espacio)."px;
	float:".$align.";
	clear:".$align.";
}

div.interna.fo-".$id." .marco
{
	background:url(".$imagen.") no-repeat;
	background-size:100% 100%;
	overflow:hidden;
	display:block;
	width:".$width."px;
	height:".$height."px;
	margin-left: auto;
	margin-right: auto;
}

div.interna.fo-".$id." .marco img
{
	margin-top:0;
	margin-left:0;
	width:".$width."px;
	height:".$height."px;
	position: relative;	
}

div.interna.fullres.fo-".$id."
{
	width:".$widthf."px;
}

div.interna.fo-".$id." .marco.fullres
{
	background:url(".$imagen_full.") no-repeat;
	width:".$widthf."px;
	height:".$heightf."px;
}

div.interna.fo-".$id." .marco.fullres img
{
	width:".$widthf."px;
	height:".$heightf."px;
}
		";
	}
}

?>
