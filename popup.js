// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function submitForm(){
  let color = '#e8453c';
  console.log("submitForm");
  let fullName = $('label:contains("Full name"');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null,{code: 'document.getElementById("userNameInput").value  = "Testing"'});
  });
}

let submitButton = document.getElementById('submit123');

submitButton.onclick = function(element) {
  submitForm();
};
