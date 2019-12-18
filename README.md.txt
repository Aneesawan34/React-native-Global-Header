For Vector Icons install npm i react-native-vector-icons
then follow these steps 
	- react-native link react-native-vector-icons
	- Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
		 apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
	- To customize the files being copied, add the following instead:
		project.ext.vectoricons = [
    			iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
		]
 
		apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

	-Edit android/settings.gradle to look like this (without the +):
		rootProject.name = 'MyApp'
 
		include ':app'
 
		+ include ':react-native-vector-icons'
		+ project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
	
	-Edit android/app/build.gradle (note: app folder) to look like this:
		apply plugin: 'com.android.application'
 	
		android {
  		...
		}
 	
		dependencies {
  		compile fileTree(dir: 'libs', include: ['*.jar'])
  		compile "com.android.support:appcompat-v7:23.0.1"
  		compile "com.facebook.react:react-native:+"  // From node_modules
		+ compile project(':react-native-vector-icons')
		}
	-Edit your MainApplication.java (deep in android/app/src/main/java/...) to look like this (note two places to edit):
		package com.myapp;
		+ import com.oblador.vectoricons.VectorIconsPackage;
 
		....
 
 		 @Override
  		protected List<ReactPackage> getPackages() {
    		return Arrays.<ReactPackage>asList(
      		new MainReactPackage()
		+   , new VectorIconsPackage()
    		);
  		}
		}


for react navigation npm i react-navigation@3.11.0
react native link react navigation
also install npm install react-native-gesture-handler@1.1.3
react-native link react-native-gesture-handler
Follow these website for further changing in nodemudules
https://software-mansion.github.io/react-native-gesture-handler/docs/getting-started.html