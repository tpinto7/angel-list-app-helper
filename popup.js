// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
function submitForm(){
  console.log("submitForm");
  let name = document.getElementById("inputCoverLetter");
  console.log(name.length);
  let filtered = name.value.split(/{{[^.]*}}/g).join("test");


  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null,{code: 'document.getElementById("form-input--userNote").value  = "' + filtered + '";'});
  });
}

let submitButton = document.getElementById('submit123');

submitButton.onclick = function(element) {
  submitForm();
};
