// LOGIN PAGE
// REQUIRES username, password
// POPUP DIALOG BOX on failure to log in

import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Log In or Create an Account'),
      ),
      body: const Text(
        'TODO:'
            '\n\n\t\tImplement Login Screen widgets'
            '\n\n\t\tImplement Create Account Screen'
            '\n\n\t\tImplement Choose Saved Game Screen'
            '\n\n\t\tImplement Choose Adventure Screen',
          style: TextStyle(
            color: Colors.white70,
            fontSize: 24,
          ),
        ),
    );
  }
}





