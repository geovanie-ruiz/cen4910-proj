import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:mobileapp/pages/choosesave.dart';

import 'package:mobileapp/pages/login.dart';
import 'package:mobileapp/pages/createaccount.dart';
import 'package:mobileapp/pages/story.dart';

// creates color scheme variables for theme
final colorScheme = ColorScheme.fromSeed(
  brightness: Brightness.dark,
  seedColor: const Color.fromARGB(255, 20, 47, 107),
  background: const Color.fromARGB(255, 0, 0, 0),
);

// applies color scheme and font style
final theme = ThemeData().copyWith(
  useMaterial3: true,
  scaffoldBackgroundColor: colorScheme.background,
  colorScheme: colorScheme,
    textTheme: GoogleFonts.rubikTextTheme().copyWith(
      titleSmall: GoogleFonts.rubik(
        fontWeight: FontWeight.bold,
      ),
      titleMedium: GoogleFonts.rubik(
        fontWeight: FontWeight.bold,
      ),
      titleLarge: GoogleFonts.rubik(
        fontWeight: FontWeight.bold,
      ),
    ),
);

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: theme,
      //home: const LoginScreen(),
      routes: {
        '/': (context) => const LoginPage(),
        '/createaccount': (context) => const CreateAccount(),
        '/choosesave': (context) => const ChooseSave(),
        '/story': (context) => const Story(),
      }
    );

  }
}
