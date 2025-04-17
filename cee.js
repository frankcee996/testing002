

// Function to Open Sidebar
function openMenu() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

// Function to Close Sidebar
function closeMenu() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}



const games = {

  "astro-boy-the-video-game-psp": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Goku%20Makaimura%20%282006%29%28Capcom%29%28JP%29%5BULJM-05147%5D.zip"
  },
  "assassins-creed-bloodlines": {
    file: "https://downloads.romspedia.com/roms/Assassins%20Creed%20-%20Bloodlines%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip"
  },
  "fifa-13": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/FIFA%20Street%202%20%282006%29%28Electronic%20Arts%29%28JP%29%5BULJM-05141%5D.zip"
  },
  "ben-10-alien-force-vilgax-attacks": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Cars%20%282006%29%28THQ%29%28DE%29%5BULES-00323%5D.zip"
  },
 "spider-man-3": {
    file: "https://downloads.romspedia.com/roms/Spider-Man%203%20%28USA%29%20%28v1.02%29.zip"
  },
  "need-for-speed-most-wanted-5-1-0": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Need%20for%20Speed%20-%20Most%20Wanted%20-%205-1-0%20%282005%29%28Electronic%20Arts%29%28KR%29%5BULKS-46044%5D.zip"
  }, 

 "asphalt-urban-gt-2-psp": {
  file: "https://downloads.romspedia.com/roms/Asphalt%20-%20Urban%20GT%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v1.01%29.zip"
},

"armored-core-3-psp": {
  file: "https://downloads.romspedia.com/roms/Armored_Core_3_Portable_USA_PSN_PSP-HR.rar "
},


"bakugan-battle-brawlers-defenders-of-the-core-psp": {
  file: " https://downloads.romspedia.com/roms/Bakugan%20Battle%20Brawlers%20-%20Defenders%20of%20the%20Core%20%28USA%29%20%28En%2CFr%29.zip"
},


"ace-comat-x-skies-of-deception-psp": {
  file: "https://downloads.romspedia.com/roms/Ace%20Combat%20X%20-%20Skies%20of%20Deception%20%28USA%29.zip "
},


"avatar-the-last-airbender-psp": {
  file: " https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Avatar%20-%20The%20Last%20Airbender%20%282006%29%28THQ%29%28US%29%5BULUS-10165%5D.zip"
},

"ben-10-protector-of-earth": {
  file: " https://downloads.romspedia.com/roms/Ben%2010%20-%20Protector%20of%20Earth%20%28USA%29%20%28v1.01%29.zip"
},

"ben-10-ultimate-alien-cosmic-destruction": {
  file: "ttps://downloads.romspedia.com/roms/Ben%2010%20-%20Ultimate%20Alien%20-%20Cosmic%20Destruction%20%28USA%29.zip "
},

"bleach-heat-the-soul-7": {
  file: "https://downloads.romspedia.com/roms/Bleach%20-%20Heat%20the%20Soul%207%20%28Asia%29.zip "
},

"bomberman-psp": {
  file: " https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Bomberman%20%282006%29%28Konami%29%28US%29%5BULUS-10121%5D.zip"
},

"brothers-in-arms-d-day-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Brothers%20in%20Arms%20-%20D-Day%20%282006%29%28Ubi%20Soft%29%28EU%29%5BULES-00608%5D.zip "
},

"burnout-dominator-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Burnout%20Dominator%20%282007%29%28Electronic%20Arts%29%28EU%29%5BULES-00750%5D.zip "
},

"burnout-legends-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Burnout%20Legends%20%282005%29%28Electronic%20Arts%29%28EU%29%5BULES-00125%5D.zip "
},

"call-of-duty-roads-to-victory-psp": {
  file: " https://downloads.romspedia.com/roms/Call%20of%20Duty%20-%20Roads%20to%20Victory%20%28Germany%29%20%28v1.01%29%20%5Bb%5D.zip"
},

"colin-mcrae-rally-2005-plus-psp": {
  file: "https://downloads.romspedia.com/roms/Colin_McRae_Rally_2005_Plus_PROPER_REPACK_EUR_MULTi5_PSP-MUPS.rar "
},

"crash-of-the-titans-psp": {
  file: "https://downloads.romspedia.com/roms/Crash%20of%20the%20Titans%20%28USA%29%20%28v1.01%29.zip "
},

"crash-tag-team-racing-psp": {
  file: "https://downloads.romspedia.com/roms/Crash%20Tag%20Team%20Racing%20%28USA%29%20%28v1.01%29.zip "
},

"crazy-taxi-fare-wars-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Crazy%20Taxi%20-%20Fare%20Wars%20%282007%29%28Sega%29%28US%29%5BULUS-10273%5D.zip "
},

"dantes-inferno": {
  file: "https://downloads.romspedia.com/roms/Dantes%20Inferno%20%28USA%29%20%28v1.01%29.zip "
},

"daxter-psp": {
  file: "https://downloads.romspedia.com/roms/Daxter%20%28USA%29.zip "
},

"dead-or-alive-paradise-psp": {
  file: "https://downloads.romspedia.com/roms/Dead%20or%20Alive%20-%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28v1.02%29.zip "
},

"def-jam-fight-for-ny-the-takeover-psp": {
  file: "https://downloads.romspedia.com/roms/Def%20Jam%20-%20Fight%20for%20NY%20-%20The%20Takeover%20%28Europe%29.zip "
},

"digimon-adventure-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Digimon%20World%20Re-Digitize%20%282012%29%28Bandai%20Namco%29%28JP%29%5Btr%20en%20OpDecoded%5D%5Bv1.1%20-%20Dub%20edition-Western%20terms%5D.zip "
},


"dragon-ball-z-shin-budokai-2": {
  file: " https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Dragon%20Ball%20Z%20-%20Shin%20Budokai%202%20%282007%29%28Bandai%20Namco%20Games%29%28JP%29%5BULJS-00107%5D.zip"
},

"dragon-ball-z-shin-budokai-another-road": {
  file: "https://downloads.romspedia.com/roms/Dragon%20Ball%20Z%20-%20Shin%20Budokai%20Another%20Road%20%28USA%29.zip "
},

"dragon-ball-z-shin-budokai-psp": {
  file: " https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Dragon%20Ball%20Z%20-%20Shin%20Budokai%20%282006%29%28Atari%29%28US%29%5BULUS-10081%5D.zip"
},

"dragon-ball-z-tenkaichi-tag-team": {
  file: "https://downloads.romspedia.com/roms/Dragon%20Ball%20Z%20-%20Tenkaichi%20Tag%20Team%20%28USA%29%20%28En%2CFr%2CEs%29.zip "
},

"driver-76-psp": {
  file: "https://downloads.romspedia.com/roms/Driver_76_USA_PSP-pSyPSP.rar "
},

"dynasty-warriors-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Dynasty%20Warriors%20%282005%29%28Koei%29%28EU%29%5BULES-00026%5D.zip "
},

"fifa-06-soccer-psp-cover": {
  file: "https://downloads.romspedia.com/roms/FIFA_Soccer_06_USA_PSP-ARTiSAN.rar "
},

"fifa-13": {
  file: "https://downloads.romspedia.com/roms/FIFA%2013%20%28Europe%29.zip "
},

"fifa-14-world-class-soccer": {
  file: "https://downloads.romspedia.com/roms/3296%20-%20FIFA%2014%20%28Netherlands%29.7z "
},

"fifa-street-2": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/FIFA%20Street%202%20%282006%29%28Electronic%20Arts%29%28EU%29%5BULES-00264%5D.zip "
},

"fight-night-round-3-psp": {
  file: "https://downloads.romspedia.com/roms/Fight%20Night%20Round%203%20%28USA%29.zip "
},

"g-force-psp": {
  file: "https://downloads.romspedia.com/roms/G-Force%20%28USA%29%20%28En%2CFr%2CEs%29.zip "
},

"ghost-rider": {
  file: "https://downloads.romspedia.com/roms/Ghost%20Rider%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v1.02%29.zip "
},

"gladiator-begins-psp": {
  file: "https://downloads.romspedia.com/roms/Gladiator%20Begins%20%28USA%29.zip"
},

"god-of-war-chains-of-olympus-psp": {
  file: "https://downloads.romspedia.com/roms/God%20of%20War%20-%20Chains%20of%20Olympus%20%28USA%29.zip "
},

"god-of-war-ghost-of-sparta-psp": {
  file: "https://downloads.romspedia.com/roms/God%20of%20War%20-%20Ghost%20of%20Sparta%20%28USA%29%20%28En%2CFr%2CEs%29%20%28v2.00%29.zip  "
},

"godfather-the-mob-wars-psp": {
  file: "https://downloads.romspedia.com/roms/Godfather%2C%20The%20-%20Mob%20Wars%20%28USA%29.zip "
},

"hellboy-the-science-of-evil-psp": {
  file: "https://downloads.romspedia.com/roms/Hellboy%20-%20The%20Science%20of%20Evil%20%28USA%29.zip "
},

"gran-turismo": {
  file: "https://downloads.romspedia.com/roms/Gran%20Turismo%20%28USA%29%20%28En%2CFr%2CEs%29.zip "
},

"grand-theft-auto-chinatown-wars-psp": {
  file: "https://downloads.romspedia.com/roms/Grand%20Theft%20Auto%20-%20Chinatown%20Wars%20%28USA%29%20%28v1.01%29.zip "
},


"grand-theft-auto-liberty-city-stories-psp": {
  file: " https://downloads.romspedia.com/roms/Grand%20Theft%20Auto%20-%20Liberty%20City%20Stories%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v3.00%29.zip"
},


"grand-theft-auto-vice-city-stories-psp": {
  file: "https://downloads.romspedia.com/roms/Grand%20Theft%20Auto%20-%20Vice%20City%20Stories%20%28USA%29%20%28v1.03%29.zip "
},


"harry-potter-and-the-goblet-of-fire-psp": {
  file: " https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Harry%20Potter%20and%20the%20Goblet%20of%20Fire%20%282005%29%28Electronic%20Arts%29%28EU%29%5BULES-00210%5D.zip  "
},

/* android games */



"minecraft": {
  file: "https://d.apkpure.com/b/XAPK/com.mojang.minecrafttrialpe?version=latest "
},

"batman telltale": {
  file: "https://d.apkpure.com/b/XAPK/com.telltalegames.batman100?version=latest "
},


"free fire": {
  file: "https://d.apkpure.com/b/APK/com.dts.freefireth?version=latest "
},


"assasins creed chronicle": {
  file: "https://mega.nz/file/OMYWlAbY#Y1KBzUwQXTvcbejY68qp7YUJi17hFzCY3JaRDrNEBVk "
},


"Ark": {
  file: "https://d.apkpure.com/b/XAPK/com.studiowildcard.arkuse?version=latest "
},

"avater james cameron": {
  file: "https://mega.nz/file/WYBS1JQJ#ZLqzte3B8Z09_ect2lPmfdxT-UHKp7egN9-ftETPo5s "
},

"backstab": {
  file: "https://mega.nz/file/edQgXR6Q#Lqozl67Olr0b8IKhanPZFP-x8yXAndZ5YAAGsJPsUbw "
},

"bat man arkham asylum": {
  file: " https://mega.nz/file/LFgBjISD#tBjAiPR_8EACxqD8mX1ZnR6qAgI8EggkETk4Q6RsRWY "
},

"beast quest": {
  file: "https://mega.nz/file/bYgAwA4a#nCt9d06hfMgYsfPyan9_ANNN9Le6DxIdiCPXTsC449k "
},

"brothers in arm": {
  file: "https://mega.nz/file/GIoW3YjS#rEaPOdhXMMIYZtsn_zmiatF5LYxSJQvdDCWXFZOVOG8 "
},

"call of duty": {
  file: "https://d.apkpure.com/b/XAPK/com.activision.callofduty.shooter?version=latest "
},

"fifa 14": {
  file: "https://www.mediafire.com/file/dsw8uel45ni5fgf/Fifa_14_mod_Fifa_23.24.7z/file "
},

"gods of egypt": {
  file: "https://mega.nz/file/iIAngR5K#h35ufbcruVrekK9j_PL5B4rm3WYrZJ39FwmS91USpso "
},

"kamen rider": {
  file: "https://www.mediafire.com/file/s5a5bj2te9fmy4n/Kamen_Rider_YT_Adib_Bagus.apk/file "
},

"max payne": {
  file: " https://mega.nz/file/XURzGYAS#zckC3Ja4eFvdvJv8sPoQJatKqURcRlLPf41-bTzcoxI "
},

"modern combat 3": {
  file: "https://mega.nz/file/GEpmVIAJ#ZEH8bMfSd_rtbpsB_MlOuZd3-bCK2dQeVu4Kb02Kc80 "
},

"dream cricket25": {
  file: "https://d.apkpure.com/b/XAPK/in.dreamgamestudios.games.sports.dreamcricket3d?version=latest "
},

"modern combat 5": {
  file: "https://d.apkpure.com/b/XAPK/com.gameloft.android.ANMP.GloftM5HM?version=latest "
},

"modern combat": {
  file: "https://www.mediafire.com/file/i9uhzji6es70k9y/Modern_combat_sandstorm-android12%25282023%2529.apk/file "
},


"real racing 3": {
  file: " https://www.mediafire.com/file/idk2poqgxa2u8od/Real-Racing-3-v11.4.1-TopJogos.apk/file "
},

"dues ex the fall": {
  file: "https://mega.nz/file/eQgSDB6B#6uh8ZRJIZesCP135r9BtIWvPXH-CLCYlAiQbxKxF2bM "
},

"libertycity": {
  file: " https://mega.nz/file/CY4DnQyQ#symtYA2Hut5VlNKA0jJoB5ikB8hfk0twHaCk7Y4PJvQ "
},

"max payne": {
  file: " https://mega.nz/file/XURzGYAS#zckC3Ja4eFvdvJv8sPoQJatKqURcRlLPf41-bTzcoxI "
},

"miniminitia": {
  file: "https://d.apkpure.com/b/APK/com.appsomniacs.mmc?version=latest "
},

"gods of egypt": {
  file: "https://mega.nz/file/iIAngR5K#h35ufbcruVrekK9j_PL5B4rm3WYrZJ39FwmS91USpso "
},

"nova 3": {
  file: "https://mega.nz/file/nAo2lRAa#zVpDz9aLfJHeBrH5no8Vt_O4jPbn5Rr1J-i6Hr-MSV8 "
},

"modern combat 5": {
  file: "https://d.apkpure.com/b/XAPK/com.gameloft.android.ANMP.GloftM5HM?version=latest "
},

"prince of persia the shadow and the flame": {
  file: "Game link https://mega.nz/file/3BQUUDRB#iKSwWtB_nx9sckjaRRyl8MIfXBcw3o26hBBsoiu4ZX0 "
},

"nova 2": {
  file: "https://www.mediafire.com/file/xthvuroljwswmbe/N.O.V.A_2_HD_V1.0.5_MOD_APK_%255B_BY_RADJA_GAMERZ_%255D.zip/file "
},

"Roblox": {
  file: "https://d.apkpure.com/b/XAPK/com.roblox.client?version=latest "
},

"pubg mobile": {
  file: " "
},
 
"nova": {
  file: "https://www.mediafire.com/file/431x0rqvmgosern/N.O.V.A.%252B1%252BHD_apk.7z/file "
},

"six guns": {
  file: " "
},

"splinter cell": {
  file: "https://www.mediafire.com/file/em0sa8htrz5y3bz/splinter_Cell_conviction.zip/file "
},

"the dark knight rises": {
  file: "https://mega.nz/file/3YYFXbKT#qgfmdBPgS6DYkYSLhhnpVrwDvD6gt3aOACYwjB6NFvc  "
},



"dead space": {
  file: "https://mega.nz/file/OZwygDBK#yWlkoQoaC9SKRY22f9jbjU1UaQj5JF8tqwG6IyoQWdE "
},

"shadow gun": {
  file: "https://mega.nz/file/6EZWBZLZ#Wdmy7sH0cuRdqReDtB3g7HrfwM7wYlOfKmvjU1w5Z5c "
},

"splinter cell": {
  file: "https://www.mediafire.com/file/em0sa8htrz5y3bz/splinter_Cell_conviction.zip/file "
},



"the dark knight rises": {
  file: "https://mega.nz/file/3YYFXbKT#qgfmdBPgS6DYkYSLhhnpVrwDvD6gt3aOACYwjB6NFvc  "
},


"real racing 3": {
  file: " https://www.mediafire.com/file/idk2poqgxa2u8od/Real-Racing-3-v11.4.1-TopJogos.apk/file "
},



"dead space": {
  file: "https://mega.nz/file/OZwygDBK#yWlkoQoaC9SKRY22f9jbjU1UaQj5JF8tqwG6IyoQWdE "
},


"Among us": {
  file: " "
},

/* android games end */


"hellboy-the-science-of-evil-psp": {
  file: "https://downloads.romspedia.com/roms/Hellboy%20-%20The%20Science%20of%20Evil%20%28USA%29.zip "
},


"hunter-x-hunter-wonder-adventure-psp": {
  file: "https://downloads.romspedia.com/roms/Hunter%20x%20Hunter%20-%20Wonder%20Adventure%20%28Japan%29.zip "
},


"iron-man-2-psp": {
  file: "https://downloads.romspedia.com/roms/4935%20-%20Iron%20Man%202%20(U).zip "
},


"iron-man-psp": {
  file: "https://downloads.romspedia.com/roms/Iron%20Man%20%28USA%29%20%28En%2CFr%2CEs%29.zip"
},


 "jak-and-daxter-the-lost-frontier-psp" :{
  file: "https://downloads.romspedia.com/roms/Jak_And_Daxter_The_Lost_Frontier_EUR_PSP-BAHAMUT.rar "
},


"james-cameron's-avatar-psp": {
  file: "https://downloads.romspedia.com/roms/James%20Camerons%20Avatar%20-%20The%20Game%20%28USA%29%20%28En%2CFr%2CEs%29.zip "
},


"juiced-2-hot-import-nights": {
  file: "https://downloads.romspedia.com/roms/Juiced%202%20-%20Hot%20Import%20Nights%20%28USA%29%20%28v1.02%29.zip "
},


    
"justice-league-heroes-psp": {
  file: "https://downloads.romspedia.com/roms/Justice%20League%20Heroes%20%28USA%29%20%28v1.01%29.zip "
},


"kamen-rider-super-climax-heroes-psp": {
  file: "https://downloads.romspedia.com/roms/3009%20-%20Kamen%20Rider%20-%20Super%20Climax%20Heroes%20%28Japan%29.7z "
},


"kidou-senshi-gundam-gundam-vs-gundam-next-plus-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Kidou%20Senshi%20Gundam%20-%20Gundam%20vs.%20Gundam%20%282008%29%28Bandai%20Namco%20Games%29%28JP%29%5BULJS-00165%5D.zip "
},


"lego-batman-the-video-game": {
  file: "https://downloads.romspedia.com/roms/LEGO%20Batman%20-%20The%20Video%20Game%20%28USA%29.zip "
},


"lego-harry-potter-years-1-4-psp": {
  file: " "
},


"lego-harry-potter-years-5-7-psp": {
  file: "https://downloads.romspedia.com/roms/LEGO%20Harry%20Potter%20-%20Years%205-7%20%28USA%29%20%28En%2CFr%2CEs%2CPt%29.zip "
},


"lego-indiana-jones-2-the-adventure-continues-psp": {
  file: "https://downloads.romspedia.com/roms/LEGO%20Indiana%20Jones%202%20-%20The%20Adventure%20Continues%20%28USA%29%20%28En%2CFr%2CEs%29%20%28v1.01%29.zip "
},


"lego-indiana-jones-the-original-adventures-psp": {
  file: "https://downloads.romspedia.com/roms/LEGO%20Indiana%20Jones%20-%20The%20Original%20Adventures%20%28USA%29%20%28En%2CFr%2CEs%29%20%28v1.01%29.zip "
},


"lego-star-wars-ii-the-original-trilogy-ps": {
  file: "https://downloads.romspedia.com/roms/LEGO%20Star%20Wars%20II%20-%20The%20Original%20Trilogy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29%20%28v1.02%29.zip "
},


"manhunt-2": {
  file: "https://downloads.romspedia.com/roms/Manhunt%202%20%28USA%29%20%28v1.03%29.zip "
},


"marvel-nemesis-rise-of-the-imperfects-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Marvel%20Nemesis%20-%20Rise%20of%20the%20Imperfects%20%282005%29%28Electronic%20Arts%29%28EU%29%5BULES-00159%5D.zip "
},


"medal-of-honor-heroes-psp": {
  file: "https://downloads.romspedia.com/roms/Medal%20of%20Honor%20-%20Heroes%20%28Netherlands%29.zip "
},


"mega-man-maverick-hunter-x-psp": {
  file: "https://downloads.romspedia.com/roms/Mega%20Man%20-%20Maverick%20Hunter%20X%20%28USA%29%20%28v1.01%29.zip "
},


"metal-gear-solid-peace-walker-psp": {
  file: "https://downloads.romspedia.com/roms/Metal%20Gear%20Solid%20-%20Peace%20Walker%20%28USA%29%20%28v1.01%29.zip "
},


"metal-gear-solid-portable-ops-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Metal%20Gear%20Ac%21d%20%282005%29%28Konami%29%28EU%29%5BULES-00008%5D.zip "
},


"metal-slug-anthology-psp": {
  file: "https://downloads.romspedia.com/roms/Metal%20Slug%20Anthology%20%28USA%29%20%28v1.03%29.zip "
},


"midnight-club-3": {
  file: "https://downloads.romspedia.com/roms/Midnight%20Club%203%20-%20DUB%20Edition%20%28USA%29.zip "
},


"mlb-11-the-show-psp": {
  file: "https://downloads.romspedia.com/roms/MLB%2011%20-%20The%20Show%20%28USA%29.zip "
},


"monster-hunter-freedom-unite-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Monster%20Hunter%20Portable%20%282007%29%28Capcom%29%28KR%29%5BUCKS-45036%5D.zip "
},


"mortal-kombat-unchained": {
  file: "https://downloads.romspedia.com/roms/Mortal%20Kombat%20-%20Unchained%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v1.03%29.zip "
},


"naruto-shippuden-kizuna-drive-psp": {
  file: "https://downloads.romspedia.com/roms/Naruto%20Shippuden%20-%20Kizuna%20Drive%20%28USA%29%20%28En%2CFr%2CEs%29.zip "
},


"naruto-shippuden-legends-akatsuki-rising-psp": {
  file: "https://downloads.romspedia.com/roms/Naruto%20Shippuden%20-%20Legends%20-%20Akatsuki%20Rising%20%28USA%29.zip "
},


"naruto-shippuden-ultimate-ninja-heroes-3": {
  file: "https://downloads.romspedia.com/roms/Naruto%20Shippuden%20-%20Ultimate%20Ninja%20Heroes%203%20%28USA%29.zip "
},


"naruto-ultimate-ninja-heroes-2-the-phantom-fortress-psp": {
  file: " https://downloads.romspedia.com/roms/Naruto%20-%20Ultimate%20Ninja%20Heroes%202%20-%20The%20Phantom%20Fortress%20%28USA%29.zip"
},


"naruto-ultimate-ninja-heroes": {
  file: "https://downloads.romspedia.com/roms/Naruto%20-%20Ultimate%20Ninja%20Heroes%20%28USA%29.zip "
},


"nba-2k13-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/NBA%20%282005%29%28Sony%29%28US%29%5BUCUS-98607%5D.zip "
},


"need-for-speed-most-wanted-5-1-0": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Need%20for%20Speed%20-%20Most%20Wanted%20-%205-1-0%20%282005%29%28Electronic%20Arts%29%28JP%29%5BULJM-05073%5D.zip "
},


"need-for-speed-prostreet-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Need%20for%20Speed%20-%20ProStreet%20%282008%29%28Electronic%20Arts%29%28AS%29%5BULAS-42129%5D.zip "
},


"need-for-speed-underground-rivals": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Need%20for%20Speed%20-%20Underground%20Rivals%20%282005%29%28Electronic%20Arts%29%28JP%29%5BULJM-05008%5D.zip "
},


"need-for-speed-undercover-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Need%20for%20Speed%20-%20Carbon%20-%20Own%20the%20City%20%282006%29%28Electronic%20Arts%29%28US%29%5BULUS-10114%5D.zip "
},


"medal-of-honor-heroes-2-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Medal%20of%20Honor%20-%20Heroes%202%20%282007%29%28Electronic%20Arts%29%28US%29%5BULUS-10310%5D.zip "
},


"one-piece-romance-dawn-bouken-no-yoake-psp": {
  file: "https://downloads.romspedia.com/roms/3019%20-%20One%20Piece%20-%20Romance%20Dawn%20-%20Bouken%20no%20Yoake%20%28Japan%29%20%28v1.01%29.7z "
},


"patapon-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Patapon%20%282007%29%28Sony%29%28JP%29%5BUCJS-10077%5D.zip "
},


"prince-of-persia-revelations": {
  file: "https://downloads.romspedia.com/roms/Prince%20of%20Persia%20-%20Revelations%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v1.01%29.zip "
},


"prince-of-persia-the-forgotten-sands-psp": {
  file: "https://downloads.romspedia.com/roms/Prince%20of%20Persia%20-%20The%20Forgotten%20Sands%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip "
},


"pro-evolution-soccer-6-psp": {
  file: " https://downloads.romspedia.com/roms/Pro%20Evolution%20Soccer%206%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29%20%28v1.03%29.zip"
},


"pro-evolution-soccer-2010-psp": {
  file: "https://downloads.romspedia.com/roms/3068%20-%20Pro%20Evolution%20Soccer%202010%20%28USA%29%20%28En%2CFr%2CEs%2CPt%29.7z "
},


"pro-evolution-soccer-2012-ps": {
  file: "https://downloads.romspedia.com/roms/Pro%20Evolution%20Soccer%202012%20%28USA%29%20%28En%2CFr%2CEs%2CPt%29%20%28v1.01%29.zip "
},


"pro-evolution-soccer-2013": {
  file: "https://downloads.romspedia.com/roms/3069%20-%20Pro%20Evolution%20Soccer%202013%20%28USA%29%20%28En%2CFr%2CEs%2CPt%29.7z "
},



"pro-evolution-soccer-2014": {
  file: "https://downloads.romspedia.com/roms/3185%20-%20Pro%20Evolution%20Soccer%202014%20%28Europe%29%20%28It%2CEl%29.7z "
},


"resistance-retribution-psp": {
  file: "https://downloads.romspedia.com/roms/Resistance%20-%20Retribution%20%28USA%29%20%28En%2CJa%2CFr%2CEs%29.zip "
},


"saint-seiya-omega-ultimate-cosmo-psp": {
  file: "https://downloads.romspedia.com/roms/3158%20-%20Saint%20Seiya%20Omega%20-%20Ultimate%20Cosmo%20%28Japan%29.7z "
},


"sbk-09-superbike-world-championship-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/SBK%2007%20-%20Superbike%20World%20Championship%20%282007%29%28Black%20Bean%29%28EU%29%5BULES-00800%5D.zip "
},


"scarface-money-power-respect-psp": {
  file: "https://downloads.romspedia.com/roms/Scarface_Money_Power_Respect_USA_PSP-DMU.rar "
},


"scooby-doo!-whos-watching-who-psp": {
  file: "https://downloads.romspedia.com/roms/Scooby_Doo_Whos_Watching_Who_USA_PSP-pSyPSP.rar "
},


"shrek-the-third-psp": {
  file: "https://downloads.romspedia.com/roms/Shrek_The_Third_USA_PSP-ZRY.rar "
},


"silent-hill-origins-psp": {
  file: "https://downloads.romspedia.com/roms/Silent%20Hill%20Origins%20%28Asia%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip "
},


"sims-2-the-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Sims%202%20Castaway%2C%20The%20%282007%29%28Electronic%20Arts%29%28US%29%5BULUS-10296%5D.zip "
},


"sonic-rivals-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Sonic%20Rivals%20%282006%29%28Sega%29%28EU%29%5BULES-00622%5D.zip "
},


"soulcalibur-broken-destiny-psp": {
  file: "https://downloads.romspedia.com/roms/Soulcalibur%20-%20Broken%20Destiny%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip "
},


"spider-man-2": {
  file: "https://downloads.romspedia.com/roms/Spider-Man%202%20%28USA%29%20%28v1.01%29.zip "
},


"spider-man-3": {
  file: "https://downloads.romspedia.com/roms/Spider-Man%203%20%28USA%29%20%28v1.02%29.zip "
},


"spider-man-web-of-shadows": {
  file: "https://downloads.romspedia.com/roms/Spider-Man%20-%20Web%20of%20Shadows%20%28USA%29%20%28En%2CFr%29%20%28v1.01%29.zip "
},


"star-wars-the-force-unleashed-psp": {
  file: "https://downloads.romspedia.com/roms/Star%20Wars%20-%20The%20Force%20Unleashed%20%28USA%29%20%28v1.01%29.zip "
},


"street-fighter-alpha-3-max-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Street%20Fighter%20Alpha%203%20Max%20%282006%29%28Capcom%29%28US%29%5BULUS-10062%5D.zip "
},


"street-fighter-zero-3-double-upper-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Street%20Fighter%20Zero%203%20Double%20Upper%20%282006%29%28Capcom%29%28JP%29%5BULJM-05082%5D.zip "
},


"tekken-6-psp": {
  file: "https://downloads.romspedia.com/roms/Tekken%206%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip "
},


"tekken-dark-resurrection": {
  file: "https://downloads.romspedia.com/roms/Tekken%20-%20Dark%20Resurrection%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip "
},


"tenchi-time-of-the-assassins-psp": {
  file: "https://downloads.romspedia.com/roms/Tenchu%20-%20Time%20of%20the%20Assassins%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v1.01%29.zip "
},


"test-drive-unlimited-psp": {
  file: "https://downloads.romspedia.com/roms/Test%20Drive%20Unlimited%20%28USA%29.zip "
},


"tmnt-teenage-mutant-ninja-turtles-psp": {
  file: "https://downloads.romspedia.com/roms/TMNT%20-%20Teenage%20Mutant%20Ninja%20Turtles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip "
},


"tna-impact-cross-the-line-psp": {
  file: "https://downloads.romspedia.com/roms/TNA%20Impact%21%20Cross%20the%20Line%20%28USA%29%20%28En%2CFr%29.zip "
},


"tom-clancys-splinter-cell-essentials-psp": {
  file: "https://downloads.romspedia.com/roms/Tom%20Clancys%20Splinter%20Cell%20-%20Essentials%20%28USA%29%20%28v1.02%29.zip "
},


"tomb-raider-legend-psp": {
  file: "https://downloads.romspedia.com/roms/Tomb%20Raider%20-%20Legend%20%28USA%29%20%28v1.02%29.zip "
},


"tony-hawks-underground-2-remix-psp": {
  file: "https://downloads.romspedia.com/roms/Tony%20Hawks%20Underground%202%20Remix%20%28USA%29%20%28v1.01%29.zip "
},


"toradora": {
  file: "https://downloads.romspedia.com/roms/Toradora%20Portable%21%20%28English%20v1.10%29.7z "
},


"tron-evolution-psp": {
  file: "https://downloads.romspedia.com/roms/TRON%20-%20Evolution%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip "
},


"ufc-2010-undisputed-psp": {
  file: "https://downloads.romspedia.com/roms/UFC%202010%20Undisputed%20%28USA%29.zip "
},


"virtua-tennis-3-psp": {
  file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Virtua%20Tennis%203%20%282007%29%28Sega%29%28US%29%5BULUS-10246%5D.zip "
},


"warriors-the-psp": {
  file: "https://downloads.romspedia.com/roms/Warriors%2C%20The%20%28Europe%29%20%28v1.02%29.zip "
},



"wwe-smackdown-vs-raw-2007-psp": {
  file: "https://downloads.romspedia.com/roms/WWE%20SmackDown!%20vs.%20RAW%202007%20(USA)%20(v1.03).zip "
},



"wwe-smackdown-vs-raw-2008-featuring-ecw": {
  file: "https://downloads.romspedia.com/roms/WWE%20SmackDown%21%20vs.%20RAW%202008%20featuring%20ECW%20%28USA%29.zip "
},



"wwe-smackdown-vs-raw-2009-featuring-ecw-psp": {
  file: "https://downloads.romspedia.com/roms/WWE%20SmackDown%21%20vs.%20RAW%202009%20featuring%20ECW%20%28Europe%29.zip "
},



"wwe-smackdown-vs-raw-2010-futuring-psp": {
  file: "https://downloads.romspedia.com/roms/WWE%20SmackDown%21%20vs.%20RAW%202010%20featuring%20ECW%20%28USA%29.zip "
},



"wwe-smackdown-vs-raw-2011-psp": {
  file: "https://downloads.romspedia.com/roms/WWE%20SmackDown%21%20vs.%20RAW%202011%20%28Europe%29%20%28v1.01%29.zip "
},



"yu-gi-oh-5d's-tag-force-5-psp": {
  file: "https://downloads.romspedia.com/roms/Yu-Gi-Oh%21%205Ds%20-%20Tag%20Force%205%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v1.01%29.zip "
},



"yu-gi-oh-gx-tag-force-2-psp": {
  file: "https://downloads.romspedia.com/roms/Yu-Gi-Oh%21%20GX%20-%20Tag%20Force%202%20%28USA%29%20%28v1.02%29.zip "
},




};




function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

window.onload = function () {
  const gameKey = getQueryParam('game');

  if (gameKey && games[gameKey]) {
      const title = gameKey.replace(/-/g, ' ').toUpperCase();
      const file = games[gameKey].file;

      // Try multiple image formats
      const imageBase = `game_images/${gameKey}-cover`;
      const imageFormats = ['webp', 'png', 'jpeg'];
      let imageFound = false;

      for (let format of imageFormats) {
          let testImage = new Image();
          testImage.src = `${imageBase}.${format}`;
          testImage.onload = function () {
              if (!imageFound) {
                  imageFound = true;
                  document.getElementById('game-image').src = testImage.src;
              }
          };
      }

      document.getElementById('game-title').textContent = title;
      document.getElementById('download-button').href = file;

  } else {
      document.getElementById('game-title').textContent = "Game not found";
      document.getElementById('download-button').style.display = 'none';
      document.getElementById('game-image').style.display = 'none';
  }
};


const searchIcon = document.getElementById('search-toggle');


searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('show');
  if (!searchInput.classList.contains('show')) {
    searchInput.value = '';
    removeHighlights();
  } else {
    searchInput.focus();
  }
});

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.game-card');

  cards.forEach(card => {
    const title = card.querySelector('h3');
    const text = title.textContent.toLowerCase();

    // Reset previous highlight
    title.innerHTML = title.textContent;

    if (query && text.includes(query)) {
      const regex = new RegExp(`(${query})`, 'gi');
      const highlighted = title.textContent.replace(regex, '<span class="highlight">$1</span>');
      title.innerHTML = highlighted;
      card.style.display = '';
    } else if (query) {
      card.style.display = 'none';
    } else {
      card.style.display = ''; // Show all if search is empty
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carousel-track");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const scrollAmount = 200;

  function scrollRight() {
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  function scrollLeft() {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  let autoScroll = setInterval(scrollRight, 3000);

  nextBtn.addEventListener("click", scrollRight);
  prevBtn.addEventListener("click", scrollLeft);

  track.addEventListener("mouseenter", () => clearInterval(autoScroll));
  track.addEventListener("mouseleave", () => {
    autoScroll = setInterval(scrollRight, 3000);
  });

  // DOT SYSTEM
  const dotsContainer = document.getElementById('carousel-dots');
  const items = track.querySelectorAll('a');

  dotsContainer.innerHTML = '';

  items.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');

    // Make dot clickable
    dot.addEventListener('click', () => {
      const itemWidth = items[0].offsetWidth + 10; // adjust if gap changes
      track.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  function updateDots() {
    const scrollLeft = track.scrollLeft;
    const itemWidth = items[0].offsetWidth + 10;
    const index = Math.round(scrollLeft / itemWidth);

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  track.addEventListener('scroll', updateDots);
});





  document.addEventListener("DOMContentLoaded", function () {
    const starContainers = document.querySelectorAll('.game-stars');
    let storedRatings = JSON.parse(localStorage.getItem('starRatings'));

    if (!storedRatings || storedRatings.length !== starContainers.length) {
      storedRatings = Array.from({ length: starContainers.length }, () =>
        Math.floor(Math.random() * 5) + 1
      );
      localStorage.setItem('starRatings', JSON.stringify(storedRatings));
    }

    starContainers.forEach((container, index) => {
      const rating = storedRatings[index];
      const filled = '★'.repeat(rating);
      const empty = '☆'.repeat(5 - rating);
      container.innerHTML = filled + empty;
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.pagination a');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    }
  });

  // Handle disabling prev/next buttons
  const activeIndex = Array.from(links).findIndex(link => link.classList.contains('active'));
  if (activeIndex !== -1) {
    const prevBtn = document.querySelector('.pagination .prev');
    const nextBtn = document.querySelector('.pagination .next');

    // Disable "Prev" if on first page
    if (activeIndex <= 1) {
      prevBtn.classList.add('disabled');
      prevBtn.style.pointerEvents = 'none';
      prevBtn.style.opacity = '0.5';
    }

    // Disable "Next" if on last page
    if (activeIndex === links.length - 2) {
      nextBtn.classList.add('disabled');
      nextBtn.style.pointerEvents = 'none';
      nextBtn.style.opacity = '0.5';
    }
  }
});


const spotlights = [
  {
    title: "GTA San Andreas (Android)",
    fact: "This iconic open-world game lets you explore San Andreas with classic missions, chaos, and freedom!"
  },
  {
    title: "Minecraft (Android)",
    fact: "Built by the community, Minecraft brings the block-building madness right into your hands!"
  },
  {
    title: "PUBG Mobile (Android)",
    fact: "One of the most popular battle royale games, PUBG Mobile features fast-paced action, strategy, and survival."
  },
  {
    title: "Subway Surfers (Android)",
    fact: "This endless runner is not only fun but one of the most downloaded games on Android of all time!"
  },

  {
    title: "God of War: Chains of Olympus (psp)",
    fact: "This game was one of the most graphically impressive titles on PSP."
  },
  {
    title: "Dragon Ball Z: Shin Budokai (psp)",
    fact: "Famous for its fast-paced action and smooth PSP performance."
  },
  {
    title: "Naruto Shippuden: Kizuna Drive (psp)",
    fact: "Unique for its team-based combat system unlike other Naruto games."
  },
  {
    title: "Tekken: Dark Resurrection (psp)",
    fact: "Considered one of the best fighting games ever released on a handheld."
  }


];

const randomGame = spotlights[Math.floor(Math.random() * spotlights.length)];

document.getElementById('spotlightBox').innerHTML = `
  <h3>${randomGame.title}</h3>
  <p>${randomGame.fact}</p>
`;



