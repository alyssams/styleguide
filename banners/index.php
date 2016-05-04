<!doctype html>
<html>
<head>
	
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"> </script>
	<script src="js/TweenMax.min.js"></script>
	<script src="js/main.js"></script>
	<link rel="stylesheet" href="css/css.css">
</head>
<body>
	<div id="wrapper">
		<div id="debug" style="position: fixed;left: 0;top:0; width: 100vw; height: 25px; background-color: lime; font-size: 14px; font-family: sans-serif; text-align: center;z-index: 1000; line-height: 25px; opacity: 0;">
			Size Count: <span class="sizeCount"></span>
			&nbsp;&nbsp;Structure Count: <span class="structureCount"></span>
			&nbsp;&nbsp;160x600: <span class="status160x600"></span>
			&nbsp;&nbsp;300x250: <span class="status300x250"></span>
			&nbsp;&nbsp;300x600: <span class="status300x600"></span>
			&nbsp;&nbsp;728x90: <span class="status728x90"></span>
		</div>
		
		<div id="side">
			<div id="filters">
				<div class="logo" onclick="javascript:window.location.reload()"></div>
				<div class="headline">Banner Animation Examples</div>
				<div class="intro"><p>The purpose of this site is to demonstrate various creative starting points for all Lexus banner animations.</p>

				<p><b>How to use the navigation below:</b><br> All available sizes and copy structures are shown to the right. To view a specific size and/or copy structure, deselect all others you wish to hide. To show a size and/or copy structure you have deselected, simply click the desired option and it will be added back to the viewing area.</p></div>
				<div class="toggles">
					<div class="size">size</div>
					<ul>
						<li class="160x600 selected" data-selected="true">160x600</li>
						<li class="300x250 selected" data-selected="true">300x250</li>
						<li class="300x600 selected" data-selected="true">300x600</li>
						<li class="728x90 selected" data-selected="true">728x90</li>
					</ul>
					<div class="structure">copy structure</div>
					<ul>
						<li class="singleRule selected" data-selected="true">Structure 01</li>
						<li class="noRule selected" data-selected="true">Structure 02</li>
						<li class="singleRule2 selected" data-selected="true">Structure 03</li>
						<li class="verticalRule selected" data-selected="true">Structure 04</li>
						<li class="doubleRule selected" data-selected="true">Structure 05</li>
					</ul>
				</div>
				<div class="more-info">
					<ul>
						<li class="showAll" data-selected="false">Show All</li>
						<li class="hideAll" data-selected="false">Hide All</li><br><br>
					</ul>
					<div class="download">
						<a id="download" class="cta btn-download" href="psd/ver1_041916_Lexus_Banner_Templates.zip">Download All Templates</a>
						<p>Sizes include: 160x600,<br/>300x250, 300x600, and 728x90</p>
					</div>
					<ul>
						<li>Version 1.0</li>
						<li>Updated 04.22.16</li>
					</ul>
				</div>
				
			</div>
		</div>

		

			<div id="banners">
				<div id="top"></div>

				<div id="container160x600">
					<div class="size-info">
						<div class="sizeHeader">160 x 600</div>
						<a id="download" class="cta btn-download" href="psd/ver1_041916_160x600_Lexus_Banner_Template.zip">Download Template</a>
					</div>
					
					<div id="containersr160x600" class="structure01">
						<div class="subHeader"><b>Structure 01</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("160x600/single_rule/01A.php"); ?>
						<?php include("160x600/single_rule/01B.php"); ?>
						<?php include("160x600/single_rule/01C.php"); ?>
						<?php include("160x600/single_rule/01D.php"); ?>
						<script type="text/javascript" src="160x600/single_rule/js/01A.js"> </script>
						<script type="text/javascript" src="160x600/single_rule/js/01B.js"> </script>
						<script type="text/javascript" src="160x600/single_rule/js/01C.js"> </script>
						<script type="text/javascript" src="160x600/single_rule/js/01D.js"> </script>
						<link rel="stylesheet" href="160x600/single_rule/css/01A.css">
						<link rel="stylesheet" href="160x600/single_rule/css/01B.css">
						<link rel="stylesheet" href="160x600/single_rule/css/01C.css">
						<link rel="stylesheet" href="160x600/single_rule/css/01D.css">
					</div>
					<div id="containernr160x600" class="structure02">
						<div class="subHeader"><b>Structure 02</b>  //  No rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("160x600/no_rule/01A.php"); ?>
						<?php include("160x600/no_rule/01B.php"); ?>
						<?php include("160x600/no_rule/01C.php"); ?>
						<script type="text/javascript" src="160x600/no_rule/js/01A.js"> </script>
						<script type="text/javascript" src="160x600/no_rule/js/01B.js"> </script>
						<script type="text/javascript" src="160x600/no_rule/js/01C.js"> </script>
						<link rel="stylesheet" href="160x600/no_rule/css/01A.css">
						<link rel="stylesheet" href="160x600/no_rule/css/01B.css">
						<link rel="stylesheet" href="160x600/no_rule/css/01C.css">
					</div>
					<div id="containersr2160x600" class="structure03">
						<div class="subHeader"><b>Structure 03</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("160x600/single_rule2/01A.php"); ?>
						<?php include("160x600/single_rule2/01B.php"); ?>
						<?php include("160x600/single_rule2/01C.php"); ?>
						<?php include("160x600/single_rule2/01D.php"); ?>
						<script type="text/javascript" src="160x600/single_rule2/js/01A.js"> </script>
						<script type="text/javascript" src="160x600/single_rule2/js/01B.js"> </script>
						<script type="text/javascript" src="160x600/single_rule2/js/01C.js"> </script>
						<script type="text/javascript" src="160x600/single_rule2/js/01D.js"> </script>
						<link rel="stylesheet" href="160x600/single_rule2/css/01A.css">
						<link rel="stylesheet" href="160x600/single_rule2/css/01B.css">
						<link rel="stylesheet" href="160x600/single_rule2/css/01C.css">
						<link rel="stylesheet" href="160x600/single_rule2/css/01D.css">
					</div>

					<div id="containervr160x600" class="structure04">
						<div class="subHeader"><b>Structure 04</b>  //  Vertical rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("160x600/vertical_rule/02A.php"); ?>
						<?php include("160x600/vertical_rule/02B.php"); ?>
						<script type="text/javascript" src="160x600/vertical_rule/js/02A.js"> </script>
						<script type="text/javascript" src="160x600/vertical_rule/js/02B.js"> </script>
						<link rel="stylesheet" href="160x600/vertical_rule/css/02A.css">
						<link rel="stylesheet" href="160x600/vertical_rule/css/02B.css">
					</div>

					<div id="containerdr160x600"  class="structure05">
						<div class="subHeader"><b>Structure 05</b>  //  Double rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("160x600/double_rule/01.php"); ?>
						<?php include("160x600/double_rule/01a.php"); ?>
						<?php include("160x600/double_rule/02.php"); ?>
						<?php include("160x600/double_rule/03.php"); ?>

						<script type="text/javascript" src="160x600/double_rule/js/01.js"> </script>
						<script type="text/javascript" src="160x600/double_rule/js/01a.js"> </script>
						<script type="text/javascript" src="160x600/double_rule/js/02.js"> </script>
						<script type="text/javascript" src="160x600/double_rule/js/03.js"> </script>

						<link rel="stylesheet" href="160x600/double_rule/css/01.css">
						<link rel="stylesheet" href="160x600/double_rule/css/01a.css">
						<link rel="stylesheet" href="160x600/double_rule/css/02.css">
						<link rel="stylesheet" href="160x600/double_rule/css/03.css">

					</div>






				</div>







				<div id="container300x250">
					<div class="size-info">
						<div class="sizeHeader">300 x 250</div>
						<a id="download" class="cta btn-download" href="psd/ver1_041916_300x250_Lexus_Banner_Template.zip">Download Template</a>
					</div>
					<div id="containersr300x250" class="structure01">
						<div class="subHeader"><b>Structure 01</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x250/single_rule/01A.php"); ?>
						<?php include("300x250/single_rule/01B.php"); ?>
						<?php include("300x250/single_rule/01C.php"); ?>
						<?php include("300x250/single_rule/01D.php"); ?>
						<script type="text/javascript" src="300x250/single_rule/js/01A.js"> </script>
						<script type="text/javascript" src="300x250/single_rule/js/01B.js"> </script>
						<script type="text/javascript" src="300x250/single_rule/js/01C.js"> </script>
						<script type="text/javascript" src="300x250/single_rule/js/01D.js"> </script>
						<link rel="stylesheet" href="300x250/single_rule/css/01A.css">
						<link rel="stylesheet" href="300x250/single_rule/css/01B.css">
						<link rel="stylesheet" href="300x250/single_rule/css/01C.css">
						<link rel="stylesheet" href="300x250/single_rule/css/01D.css">
					</div>

					<div id="containernr300x250"  class="structure02">
						<div class="subHeader"><b>Structure 02</b>  //  No rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x250/no_rule/01A.php"); ?>
						<?php include("300x250/no_rule/01B.php"); ?>
						<?php include("300x250/no_rule/01C.php"); ?>
						<script type="text/javascript" src="300x250/no_rule/js/01A.js"> </script>
						<script type="text/javascript" src="300x250/no_rule/js/01B.js"> </script>
						<script type="text/javascript" src="300x250/no_rule/js/01C.js"> </script>
						<link rel="stylesheet" href="300x250/no_rule/css/01A.css">
						<link rel="stylesheet" href="300x250/no_rule/css/01B.css">
						<link rel="stylesheet" href="300x250/no_rule/css/01C.css">
					</div>

					<div id="containersr2300x250" class="structure03">
						<div class="subHeader"><b>Structure 03</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x250/single_rule2/01A.php"); ?>
						<?php include("300x250/single_rule2/01B.php"); ?>
						<?php include("300x250/single_rule2/01C.php"); ?>
						<?php include("300x250/single_rule2/01D.php"); ?>
						<script type="text/javascript" src="300x250/single_rule2/js/01A.js"> </script>
						<script type="text/javascript" src="300x250/single_rule2/js/01B.js"> </script>
						<script type="text/javascript" src="300x250/single_rule2/js/01C.js"> </script>
						<script type="text/javascript" src="300x250/single_rule2/js/01D.js"> </script>
						<link rel="stylesheet" href="300x250/single_rule2/css/01A.css">
						<link rel="stylesheet" href="300x250/single_rule2/css/01B.css">
						<link rel="stylesheet" href="300x250/single_rule2/css/01C.css">
						<link rel="stylesheet" href="300x250/single_rule2/css/01D.css">
					</div>


					<div id="containervr300x250" class="structure04">
						<div class="subHeader"><b>Structure 04</b>  //  Vertical rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x250/vertical_rule/01A.php"); ?>
						<?php include("300x250/vertical_rule/01B.php"); ?>
						<?php include("300x250/vertical_rule/01C.php"); ?>
						<script type="text/javascript" src="300x250/vertical_rule/js/01A.js"> </script>
						<script type="text/javascript" src="300x250/vertical_rule/js/01B.js"> </script>
						<script type="text/javascript" src="300x250/vertical_rule/js/01C.js"> </script>
						<link rel="stylesheet" href="300x250/vertical_rule/css/01A.css">
						<link rel="stylesheet" href="300x250/vertical_rule/css/01B.css">
						<link rel="stylesheet" href="300x250/vertical_rule/css/01C.css">
					</div>

					<div id="containerdr300x250"  class="structure05">
						<div class="subHeader"><b>Structure 05</b>  //  Double rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x250/double_rule/01C.php"); ?>
						<?php include("300x250/double_rule/01D.php"); ?>
						<script type="text/javascript" src="300x250/double_rule/js/01C.js"> </script>
						<script type="text/javascript" src="300x250/double_rule/js/01D.js"> </script>
						<link rel="stylesheet" href="300x250/double_rule/css/01C.css">
						<link rel="stylesheet" href="300x250/double_rule/css/01D.css">
					</div>












				</div>







				<div id="container300x600">
					<div class="size-info">
						<div class="sizeHeader">300 x 600</div>
						<a id="download" class="cta btn-download" href="psd/ver1_041916_300x600_Lexus_Banner_Template.zip">Download Template</a>
					</div>
					
					<div id="containersr300x600" class="structure01">
						<div class="subHeader"><b>Structure 01</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x600/single_rule/01A.php"); ?>
						<?php include("300x600/single_rule/01B.php"); ?>
						<?php include("300x600/single_rule/01C.php"); ?>
						<?php include("300x600/single_rule/01D.php"); ?>
						<script type="text/javascript" src="300x600/single_rule/js/01A.js"> </script>
						<script type="text/javascript" src="300x600/single_rule/js/01B.js"> </script>
						<script type="text/javascript" src="300x600/single_rule/js/01C.js"> </script>
						<script type="text/javascript" src="300x600/single_rule/js/01D.js"> </script>
						<link rel="stylesheet" href="300x600/single_rule/css/01A.css">
						<link rel="stylesheet" href="300x600/single_rule/css/01B.css">
						<link rel="stylesheet" href="300x600/single_rule/css/01C.css">
						<link rel="stylesheet" href="300x600/single_rule/css/01D.css">
					</div>

					<div id="containernr300x600" class="structure02">
						<div class="subHeader"><b>Structure 02</b>  //  No rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x600/no_rule/01A.php"); ?>
						<?php include("300x600/no_rule/01B.php"); ?>
						<?php include("300x600/no_rule/01C.php"); ?>
						<script type="text/javascript" src="300x600/no_rule/js/01A.js"> </script>
						<script type="text/javascript" src="300x600/no_rule/js/01B.js"> </script>
						<script type="text/javascript" src="300x600/no_rule/js/01C.js"> </script>
						<link rel="stylesheet" href="300x600/no_rule/css/01A.css">
						<link rel="stylesheet" href="300x600/no_rule/css/01B.css">
						<link rel="stylesheet" href="300x600/no_rule/css/01C.css">

					</div>

					<div id="containersr2300x600" class="structure03">
						<div class="subHeader"><b>Structure 03</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x600/single_rule2/01A.php"); ?>
						<?php include("300x600/single_rule2/01B.php"); ?>
						<?php include("300x600/single_rule2/01C.php"); ?>
						<?php include("300x600/single_rule2/01D.php"); ?>
						<script type="text/javascript" src="300x600/single_rule2/js/01A.js"> </script>
						<script type="text/javascript" src="300x600/single_rule2/js/01B.js"> </script>
						<script type="text/javascript" src="300x600/single_rule2/js/01C.js"> </script>
						<script type="text/javascript" src="300x600/single_rule2/js/01D.js"> </script>
						<link rel="stylesheet" href="300x600/single_rule2/css/01A.css">
						<link rel="stylesheet" href="300x600/single_rule2/css/01B.css">
						<link rel="stylesheet" href="300x600/single_rule2/css/01C.css">
						<link rel="stylesheet" href="300x600/single_rule2/css/01D.css">
					</div>

					<div id="containervr300x600" class="structure04">
						<div class="subHeader"><b>Structure 04</b>  //  Vertical rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x600/vertical_rule/01A.php"); ?>
						<?php include("300x600/vertical_rule/01B.php"); ?>
						<?php include("300x600/vertical_rule/01C.php"); ?>
						<script type="text/javascript" src="300x600/vertical_rule/js/01A.js"> </script>
						<script type="text/javascript" src="300x600/vertical_rule/js/01B.js"> </script>
						<script type="text/javascript" src="300x600/vertical_rule/js/01C.js"> </script>
						<link rel="stylesheet" href="300x600/vertical_rule/css/01A.css">
						<link rel="stylesheet" href="300x600/vertical_rule/css/01B.css">
						<link rel="stylesheet" href="300x600/vertical_rule/css/01C.css">
					</div>

					<div id="containerdr300x600" class="structure05">
						<div class="subHeader"><b>Structure 05</b>  //  Double rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("300x600/double_rule/01C.php"); ?>
						<?php include("300x600/double_rule/01D.php"); ?>
						<script type="text/javascript" src="300x600/double_rule/js/01C.js"> </script>
						<script type="text/javascript" src="300x600/double_rule/js/01D.js"> </script>
						<link rel="stylesheet" href="300x600/double_rule/css/01C.css">
						<link rel="stylesheet" href="300x600/double_rule/css/01D.css">
					</div>










				</div>







				<div id="container728x90">
					<div class="size-info">
						<div class="sizeHeader">728 x 90</div>
						<a id="download" class="cta btn-download" href="psd/ver1_041916_728x90_Lexus_Banner_Template.zip">Download Template</a>
					</div>
					
					<div id="containersr728x90" class="structure01">
						<div class="subHeader"><b>Structure 01</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("728x90/single_rule/01A.php"); ?>
						<?php include("728x90/single_rule/01B.php"); ?>
						<?php include("728x90/single_rule/01C.php"); ?>
						<?php include("728x90/single_rule/01D.php"); ?>
						<script type="text/javascript" src="728x90/single_rule/js/01A.js"> </script>
						<script type="text/javascript" src="728x90/single_rule/js/01B.js"> </script>
						<script type="text/javascript" src="728x90/single_rule/js/01C.js"> </script>
						<script type="text/javascript" src="728x90/single_rule/js/01D.js"> </script>
						<link rel="stylesheet" href="728x90/single_rule/css/01A.css">
						<link rel="stylesheet" href="728x90/single_rule/css/01B.css">
						<link rel="stylesheet" href="728x90/single_rule/css/01C.css">
						<link rel="stylesheet" href="728x90/single_rule/css/01D.css">
					</div>

					<div id="containernr728x90" class="structure02">
						<div class="subHeader"><b>Structure 02</b>  //  No rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("728x90/no_rule/01A.php"); ?>
						<?php include("728x90/no_rule/01B.php"); ?>
						<?php include("728x90/no_rule/01C.php"); ?>
						<script type="text/javascript" src="728x90/no_rule/js/01A.js"> </script>
						<script type="text/javascript" src="728x90/no_rule/js/01B.js"> </script>
						<script type="text/javascript" src="728x90/no_rule/js/01C.js"> </script>
						<link rel="stylesheet" href="728x90/no_rule/css/01A.css">
						<link rel="stylesheet" href="728x90/no_rule/css/01B.css">
						<link rel="stylesheet" href="728x90/no_rule/css/01C.css">

					</div>

					<div id="containervr728x90" class="structure03">
						<div class="subHeader"><b>Structure 03</b>  //  Single rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("728x90/single_rule2/01A.php"); ?>
						<?php include("728x90/single_rule2/01B.php"); ?>
						<?php include("728x90/single_rule2/01C.php"); ?>
						<?php include("728x90/single_rule2/01D.php"); ?>
						<script type="text/javascript" src="728x90/single_rule2/js/01A.js"> </script>
						<script type="text/javascript" src="728x90/single_rule2/js/01B.js"> </script>
						<script type="text/javascript" src="728x90/single_rule2/js/01C.js"> </script>
						<script type="text/javascript" src="728x90/single_rule2/js/01D.js"> </script>
						<link rel="stylesheet" href="728x90/single_rule2/css/01A.css">
						<link rel="stylesheet" href="728x90/single_rule2/css/01B.css">
						<link rel="stylesheet" href="728x90/single_rule2/css/01C.css">
						<link rel="stylesheet" href="728x90/single_rule2/css/01D.css">
					</div>


					<div id="containervr728x90" class="structure04">
						<div class="subHeader"><b>Structure 04</b>  //  Vertical rule  //  Headline only<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("728x90/vertical_rule/01A.php"); ?>
						<?php include("728x90/vertical_rule/01B.php"); ?>
						<?php include("728x90/vertical_rule/01C.php"); ?>
						<script type="text/javascript" src="728x90/vertical_rule/js/01A.js"> </script>
						<script type="text/javascript" src="728x90/vertical_rule/js/01B.js"> </script>
						<script type="text/javascript" src="728x90/vertical_rule/js/01C.js"> </script>
						<link rel="stylesheet" href="728x90/vertical_rule/css/01A.css">
						<link rel="stylesheet" href="728x90/vertical_rule/css/01B.css">
						<link rel="stylesheet" href="728x90/vertical_rule/css/01C.css">
					</div>

					<div id="containerdr728x90" class="structure05">
						<div class="subHeader"><b>Structure 05</b>  //  Double rule  //  Headline+Subhead<span style="float: right">Click banner to play. Click again to reload.</span></div>
						<?php include("728x90/double_rule/01C.php"); ?>

						<?php include("728x90/double_rule/01D.php"); ?>
						<script type="text/javascript" src="728x90/double_rule/js/01C.js"> </script>
						<script type="text/javascript" src="728x90/double_rule/js/01D.js"> </script>
						<link rel="stylesheet" href="728x90/double_rule/css/01C.css">
						<link rel="stylesheet" href="728x90/double_rule/css/01D.css">
					</div>

				</div>

		</div>
	</div>
</body>
</html>