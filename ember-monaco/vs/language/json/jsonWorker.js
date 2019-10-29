/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 2.5.1(b4d1a1e6b28e15a0f913a6ed6f733af32cd67470)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}((function(e,t){"use strict"
var r,n,o,i,a,s,c,u,f,l,d,p,h,m,g,v,y,b,x,S,C,j,k,T,O,A,E,I,P,w,N
Object.defineProperty(t,"__esModule",{value:!0}),(n=r=t.Position||(t.Position={})).create=function(e,t){return{line:e,character:t}},n.is=function(e){var t=e
return ae.objectLiteral(t)&&ae.number(t.line)&&ae.number(t.character)},(i=o=t.Range||(t.Range={})).create=function(e,t,n,o){if(ae.number(e)&&ae.number(t)&&ae.number(n)&&ae.number(o))return{start:r.create(e,t),end:r.create(n,o)}
if(r.is(e)&&r.is(t))return{start:e,end:t}
throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+o+"]")},i.is=function(e){var t=e
return ae.objectLiteral(t)&&r.is(t.start)&&r.is(t.end)},(s=a=t.Location||(t.Location={})).create=function(e,t){return{uri:e,range:t}},s.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&(ae.string(t.uri)||ae.undefined(t.uri))},(c=t.LocationLink||(t.LocationLink={})).create=function(e,t,r,n){return{targetUri:e,targetRange:t,targetSelectionRange:r,originSelectionRange:n}},c.is=function(e){var t=e
return ae.defined(t)&&o.is(t.targetRange)&&ae.string(t.targetUri)&&(o.is(t.targetSelectionRange)||ae.undefined(t.targetSelectionRange))&&(o.is(t.originSelectionRange)||ae.undefined(t.originSelectionRange))},(f=u=t.Color||(t.Color={})).create=function(e,t,r,n){return{red:e,green:t,blue:r,alpha:n}},f.is=function(e){var t=e
return ae.number(t.red)&&ae.number(t.green)&&ae.number(t.blue)&&ae.number(t.alpha)},(l=t.ColorInformation||(t.ColorInformation={})).create=function(e,t){return{range:e,color:t}},l.is=function(e){var t=e
return o.is(t.range)&&u.is(t.color)},(d=t.ColorPresentation||(t.ColorPresentation={})).create=function(e,t,r){return{label:e,textEdit:t,additionalTextEdits:r}},d.is=function(e){var t=e
return ae.string(t.label)&&(ae.undefined(t.textEdit)||C.is(t))&&(ae.undefined(t.additionalTextEdits)||ae.typedArray(t.additionalTextEdits,C.is))},(p=t.FoldingRangeKind||(t.FoldingRangeKind={})).Comment="comment",p.Imports="imports",p.Region="region",(h=t.FoldingRange||(t.FoldingRange={})).create=function(e,t,r,n,o){var i={startLine:e,endLine:t}
return ae.defined(r)&&(i.startCharacter=r),ae.defined(n)&&(i.endCharacter=n),ae.defined(o)&&(i.kind=o),i},h.is=function(e){var t=e
return ae.number(t.startLine)&&ae.number(t.startLine)&&(ae.undefined(t.startCharacter)||ae.number(t.startCharacter))&&(ae.undefined(t.endCharacter)||ae.number(t.endCharacter))&&(ae.undefined(t.kind)||ae.string(t.kind))},(g=m=t.DiagnosticRelatedInformation||(t.DiagnosticRelatedInformation={})).create=function(e,t){return{location:e,message:t}},g.is=function(e){var t=e
return ae.defined(t)&&a.is(t.location)&&ae.string(t.message)},(v=t.DiagnosticSeverity||(t.DiagnosticSeverity={})).Error=1,v.Warning=2,v.Information=3,v.Hint=4,(b=y=t.Diagnostic||(t.Diagnostic={})).create=function(e,t,r,n,o,i){var a={range:e,message:t}
return ae.defined(r)&&(a.severity=r),ae.defined(n)&&(a.code=n),ae.defined(o)&&(a.source=o),ae.defined(i)&&(a.relatedInformation=i),a},b.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&ae.string(t.message)&&(ae.number(t.severity)||ae.undefined(t.severity))&&(ae.number(t.code)||ae.string(t.code)||ae.undefined(t.code))&&(ae.string(t.source)||ae.undefined(t.source))&&(ae.undefined(t.relatedInformation)||ae.typedArray(t.relatedInformation,m.is))},(S=x=t.Command||(t.Command={})).create=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var o={title:e,command:t}
return ae.defined(r)&&0<r.length&&(o.arguments=r),o},S.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.title)&&ae.string(t.command)},(j=C=t.TextEdit||(t.TextEdit={})).replace=function(e,t){return{range:e,newText:t}},j.insert=function(e,t){return{range:{start:e,end:e},newText:t}},j.del=function(e){return{range:e,newText:""}},j.is=function(e){var t=e
return ae.objectLiteral(t)&&ae.string(t.newText)&&o.is(t.range)},(T=k=t.TextDocumentEdit||(t.TextDocumentEdit={})).create=function(e,t){return{textDocument:e,edits:t}},T.is=function(e){var t=e
return ae.defined(t)&&D.is(t.textDocument)&&Array.isArray(t.edits)},(A=O=t.CreateFile||(t.CreateFile={})).create=function(e,t){var r={kind:"create",uri:e}
return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),r},A.is=function(e){var t=e
return t&&"create"===t.kind&&ae.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||ae.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ae.boolean(t.options.ignoreIfExists)))},(I=E=t.RenameFile||(t.RenameFile={})).create=function(e,t,r){var n={kind:"rename",oldUri:e,newUri:t}
return void 0===r||void 0===r.overwrite&&void 0===r.ignoreIfExists||(n.options=r),n},I.is=function(e){var t=e
return t&&"rename"===t.kind&&ae.string(t.oldUri)&&ae.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||ae.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ae.boolean(t.options.ignoreIfExists)))},(w=P=t.DeleteFile||(t.DeleteFile={})).create=function(e,t){var r={kind:"delete",uri:e}
return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),r},w.is=function(e){var t=e
return t&&"delete"===t.kind&&ae.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||ae.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||ae.boolean(t.options.ignoreIfNotExists)))},(N=t.WorkspaceEdit||(t.WorkspaceEdit={})).is=function(e){var t=e
return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return ae.string(e.kind)?O.is(e)||E.is(e)||P.is(e):k.is(e)})))}
var M,D,V,_,F,R,L,$,q,W,K,U,B,J,H=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(C.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(C.replace(e,t))},e.prototype.delete=function(e){this.edits.push(C.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),z=function(){function e(e){var t=this
this._textEditChanges=Object.create(null),e&&((this._workspaceEdit=e).documentChanges?e.documentChanges.forEach((function(e){if(k.is(e)){var r=new H(e.edits)
t._textEditChanges[e.textDocument.uri]=r}})):e.changes&&Object.keys(e.changes).forEach((function(r){var n=new H(e.changes[r])
t._textEditChanges[r]=n})))}return Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(D.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")
var t=e
if(!(n=this._textEditChanges[t.uri])){var r={textDocument:t,edits:o=[]}
this._workspaceEdit.documentChanges.push(r),n=new H(o),this._textEditChanges[t.uri]=n}return n}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.")
var n
if(!(n=this._textEditChanges[e])){var o=[]
this._workspaceEdit.changes[e]=o,n=new H(o),this._textEditChanges[e]=n}return n},e.prototype.createFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(O.create(e,t))},e.prototype.renameFile=function(e,t,r){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(E.create(e,t,r))},e.prototype.deleteFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(P.create(e,t))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")},e}()
t.WorkspaceChange=z,(M=t.TextDocumentIdentifier||(t.TextDocumentIdentifier={})).create=function(e){return{uri:e}},M.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.uri)},(V=D=t.VersionedTextDocumentIdentifier||(t.VersionedTextDocumentIdentifier={})).create=function(e,t){return{uri:e,version:t}},V.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.uri)&&(null===t.version||ae.number(t.version))},(_=t.TextDocumentItem||(t.TextDocumentItem={})).create=function(e,t,r,n){return{uri:e,languageId:t,version:r,text:n}},_.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.uri)&&ae.string(t.languageId)&&ae.number(t.version)&&ae.string(t.text)},(R=F=t.MarkupKind||(t.MarkupKind={})).PlainText="plaintext",R.Markdown="markdown",(L=F=t.MarkupKind||(t.MarkupKind={})).is=function(e){var t=e
return t===L.PlainText||t===L.Markdown},($=t.MarkupContent||(t.MarkupContent={})).is=function(e){var t=e
return ae.objectLiteral(e)&&F.is(t.kind)&&ae.string(t.value)},(q=t.CompletionItemKind||(t.CompletionItemKind={})).Text=1,q.Method=2,q.Function=3,q.Constructor=4,q.Field=5,q.Variable=6,q.Class=7,q.Interface=8,q.Module=9,q.Property=10,q.Unit=11,q.Value=12,q.Enum=13,q.Keyword=14,q.Snippet=15,q.Color=16,q.File=17,q.Reference=18,q.Folder=19,q.EnumMember=20,q.Constant=21,q.Struct=22,q.Event=23,q.Operator=24,q.TypeParameter=25,(W=t.InsertTextFormat||(t.InsertTextFormat={})).PlainText=1,W.Snippet=2,(t.CompletionItem||(t.CompletionItem={})).create=function(e){return{label:e}},(t.CompletionList||(t.CompletionList={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(U=K=t.MarkedString||(t.MarkedString={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},U.is=function(e){var t=e
return ae.string(t)||ae.objectLiteral(t)&&ae.string(t.language)&&ae.string(t.value)},(t.Hover||(t.Hover={})).is=function(e){var t=e
return!!t&&ae.objectLiteral(t)&&($.is(t.contents)||K.is(t.contents)||ae.typedArray(t.contents,K.is))&&(void 0===e.range||o.is(e.range))},(t.ParameterInformation||(t.ParameterInformation={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(t.SignatureInformation||(t.SignatureInformation={})).create=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var o={label:e}
return ae.defined(t)&&(o.documentation=t),ae.defined(r)?o.parameters=r:o.parameters=[],o},(B=t.DocumentHighlightKind||(t.DocumentHighlightKind={})).Text=1,B.Read=2,B.Write=3,(t.DocumentHighlight||(t.DocumentHighlight={})).create=function(e,t){var r={range:e}
return ae.number(t)&&(r.kind=t),r},(J=t.SymbolKind||(t.SymbolKind={})).File=1,J.Module=2,J.Namespace=3,J.Package=4,J.Class=5,J.Method=6,J.Property=7,J.Field=8,J.Constructor=9,J.Enum=10,J.Interface=11,J.Function=12,J.Variable=13,J.Constant=14,J.String=15,J.Number=16,J.Boolean=17,J.Array=18,J.Object=19,J.Key=20,J.Null=21,J.EnumMember=22,J.Struct=23,J.Event=24,J.Operator=25,J.TypeParameter=26,(t.SymbolInformation||(t.SymbolInformation={})).create=function(e,t,r,n,o){var i={name:e,kind:t,location:{uri:n,range:r}}
return o&&(i.containerName=o),i}
var G,Q,Z,X,Y,ee,te=function(){}
t.DocumentSymbol=te,(G=te=t.DocumentSymbol||(t.DocumentSymbol={})).create=function(e,t,r,n,o,i){var a={name:e,detail:t,kind:r,range:n,selectionRange:o}
return void 0!==i&&(a.children=i),a},G.is=function(e){var t=e
return t&&ae.string(t.name)&&ae.number(t.kind)&&o.is(t.range)&&o.is(t.selectionRange)&&(void 0===t.detail||ae.string(t.detail))&&(void 0===t.deprecated||ae.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))},t.DocumentSymbol=te,(Q=t.CodeActionKind||(t.CodeActionKind={})).QuickFix="quickfix",Q.Refactor="refactor",Q.RefactorExtract="refactor.extract",Q.RefactorInline="refactor.inline",Q.RefactorRewrite="refactor.rewrite",Q.Source="source",Q.SourceOrganizeImports="source.organizeImports",(Z=t.CodeActionContext||(t.CodeActionContext={})).create=function(e,t){var r={diagnostics:e}
return null!=t&&(r.only=t),r},Z.is=function(e){var t=e
return ae.defined(t)&&ae.typedArray(t.diagnostics,y.is)&&(void 0===t.only||ae.typedArray(t.only,ae.string))},(X=t.CodeAction||(t.CodeAction={})).create=function(e,t,r){var n={title:e}
return x.is(t)?n.command=t:n.edit=t,void 0!==r&&(n.kind=r),n},X.is=function(e){var t=e
return t&&ae.string(t.title)&&(void 0===t.diagnostics||ae.typedArray(t.diagnostics,y.is))&&(void 0===t.kind||ae.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||x.is(t.command))&&(void 0===t.edit||N.is(t.edit))},(Y=t.CodeLens||(t.CodeLens={})).create=function(e,t){var r={range:e}
return ae.defined(t)&&(r.data=t),r},Y.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&(ae.undefined(t.command)||x.is(t.command))},(ee=t.FormattingOptions||(t.FormattingOptions={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},ee.is=function(e){var t=e
return ae.defined(t)&&ae.number(t.tabSize)&&ae.boolean(t.insertSpaces)}
var re,ne,oe,ie=function(){}
t.DocumentLink=ie,(re=ie=t.DocumentLink||(t.DocumentLink={})).create=function(e,t,r){return{range:e,target:t,data:r}},re.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&(ae.undefined(t.target)||ae.string(t.target))},t.DocumentLink=ie,t.EOL=["\n","\r\n","\r"],(ne=t.TextDocument||(t.TextDocument={})).create=function(e,t,r,n){return new ue(e,t,r,n)},ne.is=function(e){var t=e
return!!(ae.defined(t)&&ae.string(t.uri)&&(ae.undefined(t.languageId)||ae.string(t.languageId))&&ae.number(t.lineCount)&&ae.func(t.getText)&&ae.func(t.positionAt)&&ae.func(t.offsetAt))},ne.applyEdits=function(e,t){for(var r=e.getText(),n=function e(t,r){if(t.length<=1)return t
var n=t.length/2|0,o=t.slice(0,n),i=t.slice(n)
e(o,r),e(i,r)
for(var a=0,s=0,c=0;a<o.length&&s<i.length;){var u=r(o[a],i[s])
t[c++]=u<=0?o[a++]:i[s++]}for(;a<o.length;)t[c++]=o[a++]
for(;s<i.length;)t[c++]=i[s++]
return t}(t,(function(e,t){var r=e.range.start.line-t.range.start.line
return 0===r?e.range.start.character-t.range.start.character:r})),o=r.length,i=n.length-1;0<=i;i--){var a=n[i],s=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end)
if(!(c<=o))throw new Error("Overlapping edit")
r=r.substring(0,s)+a.newText+r.substring(c,r.length),o=s}return r},(oe=t.TextDocumentSaveReason||(t.TextDocumentSaveReason={})).Manual=1,oe.AfterDelay=2,oe.FocusOut=3
var ae,se,ce,ue=function(){function e(e,t,r,n){this._uri=e,this._languageId=t,this._version=r,this._content=n,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),r=this.offsetAt(e.end)
return this._content.substring(t,r)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,r=!0,n=0;n<t.length;n++){r&&(e.push(n),r=!1)
var o=t.charAt(n)
r="\r"===o||"\n"===o,"\r"===o&&n+1<t.length&&"\n"===t.charAt(n+1)&&n++}r&&0<t.length&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0)
var t=this.getLineOffsets(),n=0,o=t.length
if(0===o)return r.create(0,e)
for(;n<o;){var i=Math.floor((n+o)/2)
t[i]>e?o=i:n=i+1}var a=n-1
return r.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets()
if(e.line>=t.length)return this._content.length
if(e.line<0)return 0
var r=t[e.line],n=e.line+1<t.length?t[e.line+1]:this._content.length
return Math.max(Math.min(r+e.character,n),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}()
se=ae||(ae={}),ce=Object.prototype.toString,se.defined=function(e){return void 0!==e},se.undefined=function(e){return void 0===e},se.boolean=function(e){return!0===e||!1===e},se.string=function(e){return"[object String]"===ce.call(e)},se.number=function(e){return"[object Number]"===ce.call(e)},se.func=function(e){return"[object Function]"===ce.call(e)},se.objectLiteral=function(e){return null!==e&&"object"==typeof e},se.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}})),define("vscode-languageserver-types",["vscode-languageserver-types/main"],(function(e){return e})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/scanner",["require","exports"],e)}((function(e,t){"use strict"
function r(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||8192<=e&&e<=8203||8239===e||8287===e||12288===e||65279===e}function n(e){return 10===e||13===e||8232===e||8233===e}function o(e){return 48<=e&&e<=57}Object.defineProperty(t,"__esModule",{value:!0}),t.createScanner=function(e,t){void 0===t&&(t=!1)
var i=0,a=e.length,s="",c=0,u=16,f=0
function l(t,r){for(var n=0,o=0;n<t||!r;){var a=e.charCodeAt(i)
if(48<=a&&a<=57)o=16*o+a-48
else if(65<=a&&a<=70)o=16*o+a-65+10
else{if(!(97<=a&&a<=102))break
o=16*o+a-97+10}i++,n++}return n<t&&(o=-1),o}function d(){if(s="",f=0,a<=(c=i))return c=a,u=17
var t=e.charCodeAt(i)
if(r(t)){for(;i++,s+=String.fromCharCode(t),r(t=e.charCodeAt(i)););return u=15}if(n(t))return i++,s+=String.fromCharCode(t),13===t&&10===e.charCodeAt(i)&&(i++,s+="\n"),u=14
switch(t){case 123:return i++,u=1
case 125:return i++,u=2
case 91:return i++,u=3
case 93:return i++,u=4
case 58:return i++,u=6
case 44:return i++,u=5
case 34:return i++,s=function(){for(var t="",r=i;;){if(a<=i){t+=e.substring(r,i),f=2
break}var o=e.charCodeAt(i)
if(34===o){t+=e.substring(r,i),i++
break}if(92!==o){if(0<=o&&o<=31){if(n(o)){t+=e.substring(r,i),f=2
break}f=6}i++}else{if(t+=e.substring(r,i),a<=++i){f=2
break}switch(o=e.charCodeAt(i++)){case 34:t+='"'
break
case 92:t+="\\"
break
case 47:t+="/"
break
case 98:t+="\b"
break
case 102:t+="\f"
break
case 110:t+="\n"
break
case 114:t+="\r"
break
case 116:t+="\t"
break
case 117:var s=l(4,!0)
0<=s?t+=String.fromCharCode(s):f=4
break
default:f=5}r=i}}return t}(),u=10
case 47:var d=i-1
if(47===e.charCodeAt(i+1)){for(i+=2;i<a&&!n(e.charCodeAt(i));)i++
return s=e.substring(d,i),u=12}if(42!==e.charCodeAt(i+1))return s+=String.fromCharCode(t),i++,u=16
i+=2
for(var h=a-1,m=!1;i<h;){if(42===e.charCodeAt(i)&&47===e.charCodeAt(i+1)){i+=2,m=!0
break}i++}return m||(i++,f=1),s=e.substring(d,i),u=13
case 45:if(s+=String.fromCharCode(t),++i===a||!o(e.charCodeAt(i)))return u=16
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s+=function(){var t=i
if(48===e.charCodeAt(i))i++
else for(i++;i<e.length&&o(e.charCodeAt(i));)i++
if(i<e.length&&46===e.charCodeAt(i)){if(!(++i<e.length&&o(e.charCodeAt(i))))return f=3,e.substring(t,i)
for(i++;i<e.length&&o(e.charCodeAt(i));)i++}var r=i
if(i<e.length&&(69===e.charCodeAt(i)||101===e.charCodeAt(i)))if((++i<e.length&&43===e.charCodeAt(i)||45===e.charCodeAt(i))&&i++,i<e.length&&o(e.charCodeAt(i))){for(i++;i<e.length&&o(e.charCodeAt(i));)i++
r=i}else f=3
return e.substring(t,r)}(),u=11
default:for(;i<a&&p(t);)i++,t=e.charCodeAt(i)
if(c===i)return s+=String.fromCharCode(t),i++,u=16
switch(s=e.substring(c,i)){case"true":return u=8
case"false":return u=9
case"null":return u=7}return u=16}}function p(e){if(r(e)||n(e))return!1
switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){i=e,s="",u=16,f=c=0},getPosition:function(){return i},scan:t?function(){for(var e;12<=(e=d())&&e<=15;);return e}:d,getToken:function(){return u},getTokenValue:function(){return s},getTokenOffset:function(){return c},getTokenLength:function(){return i-c},getTokenError:function(){return f}}}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/format",["require","exports","./scanner"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("./scanner")
function n(e,t){for(var r="",n=0;n<t;n++)r+=e
return r}function o(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}t.format=function(e,t,i){var a,s,c,u,f
if(t){for(u=t.offset,f=u+t.length,c=u;0<c&&!o(e,c-1);)c--
for(var l=f;l<e.length&&!o(e,l);)l++
s=e.substring(c,l),a=function(e,t){for(var r=0,n=0,o=t.tabSize||4;r<e.length;){var i=e.charAt(r)
if(" "===i)n++
else{if("\t"!==i)break
n+=o}r++}return Math.floor(n/o)}(s,i)}else u=c=a=0,f=(s=e).length
var d,p=function(e,t){for(var r=0;r<t.length;r++){var n=t.charAt(r)
if("\r"===n)return r+1<t.length&&"\n"===t.charAt(r+1)?"\r\n":"\r"
if("\n"===n)return"\n"}return e&&e.eol||"\n"}(i,e),h=!1,m=0
d=i.insertSpaces?n(" ",i.tabSize||4):"\t"
var g=r.createScanner(s,!1),v=!1
function y(){return p+n(d,a+m)}function b(){var e=g.scan()
for(h=!1;15===e||14===e;)h=h||14===e,e=g.scan()
return v=16===e||0!==g.getTokenError(),e}var x=[]
function S(t,r,n){!v&&r<f&&u<n&&e.substring(r,n)!==t&&x.push({offset:r,length:n-r,content:t})}var C=b()
if(17!==C){var j=g.getTokenOffset()+c
S(n(d,a),c,j)}for(;17!==C;){for(var k=g.getTokenOffset()+g.getTokenLength()+c,T=b(),O="";!h&&(12===T||13===T);)S(" ",k,g.getTokenOffset()+c),k=g.getTokenOffset()+g.getTokenLength()+c,O=12===T?y():"",T=b()
if(2===T)1!==C&&(m--,O=y())
else if(4===T)3!==C&&(m--,O=y())
else{switch(C){case 3:case 1:m++,O=y()
break
case 5:case 12:O=y()
break
case 13:O=h?y():" "
break
case 6:O=" "
break
case 10:if(6===T){O=""
break}case 7:case 8:case 9:case 11:case 2:case 4:12===T||13===T?O=" ":5!==T&&17!==T&&(v=!0)
break
case 16:v=!0}!h||12!==T&&13!==T||(O=y())}S(O,k,g.getTokenOffset()+c),C=T}return x},t.isEOL=o})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/parser",["require","exports","./scanner"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,n=e("./scanner")
function o(e,t,r){return void 0===r&&(r=!1),t>=e.offset&&t<e.offset+e.length||r&&t===e.offset+e.length}function i(e,t,o){void 0===o&&(o=r.DEFAULT)
var i=n.createScanner(e,!1)
function a(e){return e?function(){return e(i.getTokenOffset(),i.getTokenLength())}:function(){return!0}}function s(e){return e?function(t){return e(t,i.getTokenOffset(),i.getTokenLength())}:function(){return!0}}var c=a(t.onObjectBegin),u=s(t.onObjectProperty),f=a(t.onObjectEnd),l=a(t.onArrayBegin),d=a(t.onArrayEnd),p=s(t.onLiteralValue),h=s(t.onSeparator),m=a(t.onComment),g=s(t.onError),v=o&&o.disallowComments,y=o&&o.allowTrailingComma
function b(){for(;;){var e=i.scan()
switch(i.getTokenError()){case 4:x(14)
break
case 5:x(15)
break
case 3:x(13)
break
case 1:v||x(11)
break
case 2:x(12)
break
case 6:x(16)}switch(e){case 12:case 13:v?x(10):m()
break
case 16:x(1)
break
case 15:case 14:break
default:return e}}}function x(e,t,r){if(void 0===t&&(t=[]),void 0===r&&(r=[]),g(e),0<t.length+r.length)for(var n=i.getToken();17!==n;){if(-1!==t.indexOf(n)){b()
break}if(-1!==r.indexOf(n))break
n=b()}}function S(e){var t=i.getTokenValue()
return e?p(t):u(t),b(),!0}return b(),17===i.getToken()||(function e(){switch(i.getToken()){case 3:return function(){l(),b()
for(var t=!1;4!==i.getToken()&&17!==i.getToken();){if(5===i.getToken()){if(t||x(4,[],[]),h(","),b(),4===i.getToken()&&y)break}else t&&x(6,[],[])
e()||x(4,[],[4,5]),t=!0}return d(),4!==i.getToken()?x(8,[4],[]):b(),!0}()
case 1:return function(){c(),b()
for(var t=!1;2!==i.getToken()&&17!==i.getToken();){if(5===i.getToken()){if(t||x(4,[],[]),h(","),b(),2===i.getToken()&&y)break}else t&&x(6,[],[]);(10!==i.getToken()?(x(3,[],[2,5]),0):(S(!1),6===i.getToken()?(h(":"),b(),e()||x(4,[],[2,5])):x(5,[],[2,5]),1))||x(4,[],[2,5]),t=!0}return f(),2!==i.getToken()?x(7,[2],[]):b(),!0}()
case 10:return S(!0)
default:return function(){switch(i.getToken()){case 11:var e=0
try{"number"!=typeof(e=JSON.parse(i.getTokenValue()))&&(x(2),e=0)}catch(e){x(2)}p(e)
break
case 7:p(null)
break
case 8:p(!0)
break
case 9:p(!1)
break
default:return!1}return b(),!0}()}}()?(17!==i.getToken()&&x(9,[],[]),!0):(x(4,[],[]),!1))}function a(e){switch(typeof e){case"boolean":return"boolean"
case"number":return"number"
case"string":return"string"
default:return"null"}}(r||(r={})).DEFAULT={allowTrailingComma:!1},t.getLocation=function(e,t){var r=[],n=new Object,o=void 0,s={value:{},offset:0,length:0,type:"object",parent:void 0},c=!1
function u(e,t,r,n){s.value=e,s.offset=t,s.length=r,s.type=n,s.colonOffset=void 0,o=s}try{i(e,{onObjectBegin:function(e,i){if(t<=e)throw n
o=void 0,c=e<t,r.push("")},onObjectProperty:function(e,o,i){if(t<o)throw n
if(u(e,o,i,"property"),r[r.length-1]=e,t<=o+i)throw n},onObjectEnd:function(e,i){if(t<=e)throw n
o=void 0,r.pop()},onArrayBegin:function(e,i){if(t<=e)throw n
o=void 0,r.push(0)},onArrayEnd:function(e,i){if(t<=e)throw n
o=void 0,r.pop()},onLiteralValue:function(e,r,o){if(t<r)throw n
if(u(e,r,o,a(e)),t<=r+o)throw n},onSeparator:function(e,i,a){if(t<=i)throw n
if(":"===e&&o&&"property"===o.type)o.colonOffset=i,c=!1,o=void 0
else if(","===e){var s=r[r.length-1]
r[r.length-1]="number"==typeof s?s+1:(c=!0,""),o=void 0}}})}catch(e){if(e!==n)throw e}return{path:r,previousNode:o,isAtPropertyKey:c,matches:function(e){for(var t=0,n=0;t<e.length&&n<r.length;n++)if(e[t]===r[n]||"*"===e[t])t++
else if("**"!==e[t])return!1
return t===e.length}}},t.parse=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=r.DEFAULT)
var o=null,a=[],s=[]
function c(e){Array.isArray(a)?a.push(e):o&&(a[o]=e)}return i(e,{onObjectBegin:function(){var e={}
c(e),s.push(a),a=e,o=null},onObjectProperty:function(e){o=e},onObjectEnd:function(){a=s.pop()},onArrayBegin:function(){var e=[]
c(e),s.push(a),a=e,o=null},onArrayEnd:function(){a=s.pop()},onLiteralValue:c,onError:function(e,r,n){t.push({error:e,offset:r,length:n})}},n),a[0]},t.parseTree=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=r.DEFAULT)
var o={type:"array",offset:-1,length:-1,children:[],parent:void 0}
function s(e){"property"===o.type&&(o.length=e-o.offset,o=o.parent)}function c(e){return o.children.push(e),e}i(e,{onObjectBegin:function(e){o=c({type:"object",offset:e,length:-1,parent:o,children:[]})},onObjectProperty:function(e,t,r){(o=c({type:"property",offset:t,length:-1,parent:o,children:[]})).children.push({type:"string",value:e,offset:t,length:r,parent:o})},onObjectEnd:function(e,t){o.length=e+t-o.offset,o=o.parent,s(e+t)},onArrayBegin:function(e,t){o=c({type:"array",offset:e,length:-1,parent:o,children:[]})},onArrayEnd:function(e,t){o.length=e+t-o.offset,o=o.parent,s(e+t)},onLiteralValue:function(e,t,r){c({type:a(e),offset:t,length:r,parent:o,value:e}),s(t+r)},onSeparator:function(e,t,r){"property"===o.type&&(":"===e?o.colonOffset=t:","===e&&s(t))},onError:function(e,r,n){t.push({error:e,offset:r,length:n})}},n)
var u=o.children[0]
return u&&delete u.parent,u},t.findNodeAtLocation=function(e,t){if(e){for(var r=e,n=0,o=t;n<o.length;n++){var i=o[n]
if("string"==typeof i){if("object"!==r.type||!Array.isArray(r.children))return
for(var a=!1,s=0,c=r.children;s<c.length;s++){var u=c[s]
if(Array.isArray(u.children)&&u.children[0].value===i){r=u.children[1],a=!0
break}}if(!a)return}else{var f=i
if("array"!==r.type||f<0||!Array.isArray(r.children)||f>=r.children.length)return
r=r.children[f]}}return r}},t.getNodePath=function e(t){if(!t.parent||!t.parent.children)return[]
var r=e(t.parent)
if("property"===t.parent.type){var n=t.parent.children[0].value
r.push(n)}else if("array"===t.parent.type){var o=t.parent.children.indexOf(t);-1!==o&&r.push(o)}return r},t.getNodeValue=function e(t){switch(t.type){case"array":return t.children.map(e)
case"object":for(var r=Object.create(null),n=0,o=t.children;n<o.length;n++){var i=o[n],a=i.children[1]
a&&(r[i.children[0].value]=e(a))}return r
case"null":case"string":case"number":case"boolean":return t.value
default:return}},t.contains=o,t.findNodeAtOffset=function e(t,r,n){if(void 0===n&&(n=!1),o(t,r,n)){var i=t.children
if(Array.isArray(i))for(var a=0;a<i.length&&i[a].offset<=r;a++){var s=e(i[a],r,n)
if(s)return s}return t}},t.visit=i,t.stripComments=function(e,t){var r,o,i=n.createScanner(e),a=[],s=0
do{switch(o=i.getPosition(),r=i.scan()){case 12:case 13:case 17:s!==o&&a.push(e.substring(s,o)),void 0!==t&&a.push(i.getTokenValue().replace(/[^\r\n]/g,t)),s=i.getPosition()}}while(17!==r)
return a.join("")}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/edit",["require","exports","./format","./parser"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("./format"),n=e("./parser")
function o(e,t,r,o,a){for(var s,c=t.slice(),u=n.parseTree(e,[]),f=void 0,l=void 0;0<c.length&&(l=c.pop(),void 0===(f=n.findNodeAtLocation(u,c))&&void 0!==r);)r="string"==typeof l?((s={})[l]=r,s):[r]
if(f){if("object"===f.type&&"string"==typeof l&&Array.isArray(f.children)){var d=n.findNodeAtLocation(f,[l])
if(void 0!==d){if(void 0!==r)return i(e,{offset:d.offset,length:d.length,content:JSON.stringify(r)},o)
if(!d.parent)throw new Error("Malformed AST")
var p=f.children.indexOf(d.parent),h=void 0,m=d.parent.offset+d.parent.length
return 0<p?h=(S=f.children[p-1]).offset+S.length:(h=f.offset+1,1<f.children.length&&(m=f.children[1].offset)),i(e,{offset:h,length:m-h,content:""},o)}if(void 0===r)return[]
var g=JSON.stringify(l)+": "+JSON.stringify(r),v=a?a(f.children.map((function(e){return e.children[0].value}))):f.children.length,y=void 0
return i(e,y=0<v?{offset:(S=f.children[v-1]).offset+S.length,length:0,content:","+g}:0===f.children.length?{offset:f.offset+1,length:0,content:g}:{offset:f.offset+1,length:0,content:g+","},o)}if("array"===f.type&&"number"==typeof l&&Array.isArray(f.children)){if(-1===l)return g=""+JSON.stringify(r),y=void 0,i(e,y=0===f.children.length?{offset:f.offset+1,length:0,content:g}:{offset:(S=f.children[f.children.length-1]).offset+S.length,length:0,content:","+g},o)
if(void 0===r&&0<=f.children.length){var b=l,x=f.children[b]
if(y=void 0,1===f.children.length)y={offset:f.offset+1,length:f.length-2,content:""}
else if(f.children.length-1===b){var S,C=(S=f.children[b-1]).offset+S.length
y={offset:C,length:f.offset+f.length-2-C,content:""}}else y={offset:x.offset,length:f.children[b+1].offset-x.offset,content:""}
return i(e,y,o)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof l?"index":"property")+" to parent of type "+f.type)}if(void 0===r)throw new Error("Can not delete in empty document")
return i(e,{offset:u?u.offset:0,length:u?u.length:0,content:JSON.stringify(r)},o)}function i(e,t,n){var o=a(e,t),i=t.offset,s=t.offset+t.content.length
if(0===t.length||0===t.content.length){for(;0<i&&!r.isEOL(o,i-1);)i--
for(;s<o.length&&!r.isEOL(o,s);)s++}for(var c=r.format(o,{offset:i,length:s-i},n),u=c.length-1;0<=u;u--){var f=c[u]
o=a(o,f),i=Math.min(i,f.offset),s=Math.max(s,f.offset+f.length),s+=f.content.length-f.length}return[{offset:i,length:e.length-(o.length-s)-i,content:o.substring(i,s)}]}function a(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}t.removeProperty=function(e,t,r){return o(e,t,void 0,r)},t.setProperty=o,t.applyEdit=a,t.isWS=function(e,t){return-1!=="\r\n \t".indexOf(e.charAt(t))}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/main",["require","exports","./impl/format","./impl/edit","./impl/scanner","./impl/parser"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("./impl/format"),n=e("./impl/edit"),o=e("./impl/scanner"),i=e("./impl/parser")
t.createScanner=o.createScanner,t.getLocation=i.getLocation,t.parse=i.parse,t.parseTree=i.parseTree,t.findNodeAtLocation=i.findNodeAtLocation,t.findNodeAtOffset=i.findNodeAtOffset,t.getNodePath=i.getNodePath,t.getNodeValue=i.getNodeValue,t.visit=i.visit,t.stripComments=i.stripComments,t.printParseErrorCode=function(e){switch(e){case 1:return"InvalidSymbol"
case 2:return"InvalidNumberFormat"
case 3:return"PropertyNameExpected"
case 4:return"ValueExpected"
case 5:return"ColonExpected"
case 6:return"CommaExpected"
case 7:return"CloseBraceExpected"
case 8:return"CloseBracketExpected"
case 9:return"EndOfFileExpected"
case 10:return"InvalidCommentToken"
case 11:return"UnexpectedEndOfComment"
case 12:return"UnexpectedEndOfString"
case 13:return"UnexpectedEndOfNumber"
case 14:return"InvalidUnicode"
case 15:return"InvalidEscapeCharacter"
case 16:return"InvalidCharacter"}return"<unknown ParseErrorCode>"},t.format=function(e,t,n){return r.format(e,t,n)},t.modify=function(e,t,r,o){return n.setProperty(e,t,r,o.formattingOptions,o.getInsertionIndex)},t.applyEdits=function(e,t){for(var r=t.length-1;0<=r;r--)e=n.applyEdit(e,t[r])
return e}})),define("jsonc-parser",["jsonc-parser/main"],(function(e){return e})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/utils/objects",["require","exports"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.equals=function e(t,r){if(t===r)return!0
if(null==t||null==r)return!1
if(typeof t!=typeof r)return!1
if("object"!=typeof t)return!1
if(Array.isArray(t)!==Array.isArray(r))return!1
var n,o
if(Array.isArray(t)){if(t.length!==r.length)return!1
for(n=0;n<t.length;n++)if(!e(t[n],r[n]))return!1}else{var i=[]
for(o in t)i.push(o)
i.sort()
var a=[]
for(o in r)a.push(o)
if(a.sort(),!e(i,a))return!1
for(n=0;n<i.length;n++)if(!e(t[i[n]],r[i[n]]))return!1}return!0},t.isNumber=function(e){return"number"==typeof e},t.isDefined=function(e){return void 0!==e},t.isBoolean=function(e){return"boolean"==typeof e},t.isString=function(e){return"string"==typeof e}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/jsonLanguageTypes",["require","exports","vscode-languageserver-types"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,n,o=e("vscode-languageserver-types")
t.Range=o.Range,t.TextEdit=o.TextEdit,t.Color=o.Color,t.ColorInformation=o.ColorInformation,t.ColorPresentation=o.ColorPresentation,t.FoldingRange=o.FoldingRange,t.FoldingRangeKind=o.FoldingRangeKind,(r=t.SelectionRangeKind||(t.SelectionRangeKind={})).Empty="",r.Statement="statement",r.Declaration="declaration",(n=t.ErrorCode||(t.ErrorCode={}))[n.Undefined=0]="Undefined",n[n.EnumValueMismatch=1]="EnumValueMismatch",n[n.UnexpectedEndOfComment=257]="UnexpectedEndOfComment",n[n.UnexpectedEndOfString=258]="UnexpectedEndOfString",n[n.UnexpectedEndOfNumber=259]="UnexpectedEndOfNumber",n[n.InvalidUnicode=260]="InvalidUnicode",n[n.InvalidEscapeCharacter=261]="InvalidEscapeCharacter",n[n.InvalidCharacter=262]="InvalidCharacter",n[n.PropertyExpected=513]="PropertyExpected",n[n.CommaExpected=514]="CommaExpected",n[n.ColonExpected=515]="ColonExpected",n[n.ValueExpected=516]="ValueExpected",n[n.CommaOrCloseBacketExpected=517]="CommaOrCloseBacketExpected",n[n.CommaOrCloseBraceExpected=518]="CommaOrCloseBraceExpected",n[n.TrailingComma=519]="TrailingComma",n[n.DuplicateKey=520]="DuplicateKey",n[n.CommentNotPermitted=521]="CommentNotPermitted",n[n.SchemaResolveError=768]="SchemaResolveError",(t.ClientCapabilities||(t.ClientCapabilities={})).LATEST={textDocument:{completion:{completionItem:{documentationFormat:[o.MarkupKind.Markdown,o.MarkupKind.PlainText]}}}}})),define("vscode-nls/vscode-nls",["require","exports"],(function(e,t){"use strict"
function r(e,t){for(var r,n,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i]
return r=t,0===(n=o).length?r:r.replace(/\{(\d+)\}/g,(function(e,t){var r=t[0]
return void 0!==n[r]?n[r]:e}))}function n(e){return r}Object.defineProperty(t,"__esModule",{value:!0}),t.loadMessageBundle=n,t.config=function(e){return n}})),define("vscode-nls",["vscode-nls/vscode-nls"],(function(e){return e}))
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}
return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-uri/index",["require","exports"],e)}((function(e,t){"use strict"
var r
if(Object.defineProperty(t,"__esModule",{value:!0}),"object"==typeof process)r="win32"===process.platform
else if("object"==typeof navigator){var n=navigator.userAgent
r=0<=n.indexOf("Windows")}var o,i=/^\w[\w\d+.-]*$/,a=/^\//,s=/^\/\//,c="/",u=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,f=function(){function e(e,t,r,n,o){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||"",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?t[0]!==c&&(t=c+t):t=c}return t}(this.scheme,r||""),this.query=n||"",this.fragment=o||"",function(e){if(e.scheme&&!i.test(e.scheme))throw new Error("[UriError]: Scheme contains illegal characters.")
if(e.path)if(e.authority){if(!a.test(e.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(s.test(e.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this))}return e.isUri=function(t){return t instanceof e||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme},Object.defineProperty(e.prototype,"fsPath",{get:function(){return m(this)},enumerable:!0,configurable:!0}),e.prototype.with=function(e){if(!e)return this
var t=e.scheme,r=e.authority,n=e.path,o=e.query,i=e.fragment
return void 0===t?t=this.scheme:null===t&&(t=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===n?n=this.path:null===n&&(n=""),void 0===o?o=this.query:null===o&&(o=""),void 0===i?i=this.fragment:null===i&&(i=""),t===this.scheme&&r===this.authority&&n===this.path&&o===this.query&&i===this.fragment?this:new l(t,r,n,o,i)},e.parse=function(e){var t=u.exec(e)
return t?new l(t[2]||"",decodeURIComponent(t[4]||""),decodeURIComponent(t[5]||""),decodeURIComponent(t[7]||""),decodeURIComponent(t[9]||"")):new l("","","","","")},e.file=function(e){var t=""
if(r&&(e=e.replace(/\\/g,c)),e[0]===c&&e[1]===c){var n=e.indexOf(c,2)
e=-1===n?(t=e.substring(2),c):(t=e.substring(2,n),e.substring(n)||c)}return new l("file",t,e,"","")},e.from=function(e){return new l(e.scheme,e.authority,e.path,e.query,e.fragment)},e.prototype.toString=function(e){return void 0===e&&(e=!1),g(this,e)},e.prototype.toJSON=function(){return this},e.revive=function(t){if(t){if(t instanceof e)return t
var r=new l(t)
return r._fsPath=t.fsPath,r._formatted=t.external,r}return t},e}(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t._formatted=null,t._fsPath=null,t}return __extends(t,e),Object.defineProperty(t.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=m(this)),this._fsPath},enumerable:!0,configurable:!0}),t.prototype.toString=function(e){return void 0===e&&(e=!1),e?g(this,!0):(this._formatted||(this._formatted=g(this,!1)),this._formatted)},t.prototype.toJSON=function(){var e={$mid:1}
return this._fsPath&&(e.fsPath=this._fsPath),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e},t}(t.default=f),d=((o={})[58]="%3A",o[47]="%2F",o[63]="%3F",o[35]="%23",o[91]="%5B",o[93]="%5D",o[64]="%40",o[33]="%21",o[36]="%24",o[38]="%26",o[39]="%27",o[40]="%28",o[41]="%29",o[42]="%2A",o[43]="%2B",o[44]="%2C",o[59]="%3B",o[61]="%3D",o[32]="%20",o)
function p(e,t){for(var r=void 0,n=-1,o=0;o<e.length;o++){var i=e.charCodeAt(o)
if(97<=i&&i<=122||65<=i&&i<=90||48<=i&&i<=57||45===i||46===i||95===i||126===i||t&&47===i)-1!==n&&(r+=encodeURIComponent(e.substring(n,o)),n=-1),void 0!==r&&(r+=e.charAt(o))
else{void 0===r&&(r=e.substr(0,o))
var a=d[i]
void 0!==a?(-1!==n&&(r+=encodeURIComponent(e.substring(n,o)),n=-1),r+=a):-1===n&&(n=o)}}return-1!==n&&(r+=encodeURIComponent(e.substring(n))),void 0!==r?r:e}function h(e){for(var t=void 0,r=0;r<e.length;r++){var n=e.charCodeAt(r)
35===n||63===n?(void 0===t&&(t=e.substr(0,r)),t+=d[n]):void 0!==t&&(t+=e[r])}return void 0!==t?t:e}function m(e){var t
return t=e.authority&&1<e.path.length&&"file"===e.scheme?"//"+e.authority+e.path:47===e.path.charCodeAt(0)&&(65<=e.path.charCodeAt(1)&&e.path.charCodeAt(1)<=90||97<=e.path.charCodeAt(1)&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?e.path[1].toLowerCase()+e.path.substr(2):e.path,r&&(t=t.replace(/\//g,"\\")),t}function g(e,t){var r=t?h:p,n="",o=e.scheme,i=e.authority,a=e.path,s=e.query,u=e.fragment
if(o&&(n+=o,n+=":"),(i||"file"===o)&&(n+=c,n+=c),i){var f=i.indexOf("@")
if(-1!==f){var l=i.substr(0,f)
i=i.substr(f+1),-1===(f=l.indexOf(":"))?n+=r(l,!1):(n+=r(l.substr(0,f),!1),n+=":",n+=r(l.substr(f+1),!1)),n+="@"}-1===(f=(i=i.toLowerCase()).indexOf(":"))?n+=r(i,!1):(n+=r(i.substr(0,f),!1),n+=i.substr(f))}if(a){if(3<=a.length&&47===a.charCodeAt(0)&&58===a.charCodeAt(2))65<=(d=a.charCodeAt(1))&&d<=90&&(a="/"+String.fromCharCode(d+32)+":"+a.substr(3))
else if(2<=a.length&&58===a.charCodeAt(1)){var d
65<=(d=a.charCodeAt(0))&&d<=90&&(a=String.fromCharCode(d+32)+":"+a.substr(2))}n+=r(a,!0)}return s&&(n+="?",n+=r(s,!1)),u&&(n+="#",n+=t?u:p(u,!1)),n}})),define("vscode-uri",["vscode-uri/index"],(function(e){return e})),__extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)}
return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/parser/jsonParser",["require","exports","jsonc-parser","../utils/objects","../jsonLanguageTypes","vscode-nls","vscode-uri","vscode-languageserver-types"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("jsonc-parser"),n=e("../utils/objects"),o=e("../jsonLanguageTypes"),i=e("vscode-nls"),a=e("vscode-uri"),s=e("vscode-languageserver-types"),c=i.loadMessageBundle(),u=/^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,f=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=function(){function e(e,t,r){this.offset=t,this.length=r,this.parent=e}return Object.defineProperty(e.prototype,"children",{get:function(){return[]},enumerable:!0,configurable:!0}),e.prototype.toString=function(){return"type: "+this.type+" ("+this.offset+"/"+this.length+")"+(this.parent?" parent: {"+this.parent.toString()+"}":"")},e}(),d=function(e){function t(t,r){var n=e.call(this,t,r)||this
return n.type="null",n.value=null,n}return __extends(t,e),t}(t.ASTNodeImpl=l)
t.NullASTNodeImpl=d
var p=function(e){function t(t,r,n){var o=e.call(this,t,n)||this
return o.type="boolean",o.value=r,o}return __extends(t,e),t}(l)
t.BooleanASTNodeImpl=p
var h=function(e){function t(t,r){var n=e.call(this,t,r)||this
return n.type="array",n.items=[],n}return __extends(t,e),Object.defineProperty(t.prototype,"children",{get:function(){return this.items},enumerable:!0,configurable:!0}),t}(l)
t.ArrayASTNodeImpl=h
var m=function(e){function t(t,r){var n=e.call(this,t,r)||this
return n.type="number",n.isInteger=!0,n.value=Number.NaN,n}return __extends(t,e),t}(l)
t.NumberASTNodeImpl=m
var g=function(e){function t(t,r,n){var o=e.call(this,t,r,n)||this
return o.type="string",o.value="",o}return __extends(t,e),t}(l)
t.StringASTNodeImpl=g
var v=function(e){function t(t,r){var n=e.call(this,t,r)||this
return n.type="property",n.colonOffset=-1,n}return __extends(t,e),Object.defineProperty(t.prototype,"children",{get:function(){return this.valueNode?[this.keyNode,this.valueNode]:[this.keyNode]},enumerable:!0,configurable:!0}),t}(l)
t.PropertyASTNodeImpl=v
var y,b=function(e){function t(t,r){var n=e.call(this,t,r)||this
return n.type="object",n.properties=[],n}return __extends(t,e),Object.defineProperty(t.prototype,"children",{get:function(){return this.properties},enumerable:!0,configurable:!0}),t}(l)
function x(e){return n.isBoolean(e)?e?{}:{not:{}}:e}t.ObjectASTNodeImpl=b,t.asSchema=x,(y=t.EnumMatch||(t.EnumMatch={}))[y.Key=0]="Key",y[y.Enum=1]="Enum"
var S=function(){function e(e,t){void 0===e&&(e=-1),void 0===t&&(t=null),this.focusOffset=e,this.exclude=t,this.schemas=[]}return e.prototype.add=function(e){this.schemas.push(e)},e.prototype.merge=function(e){var t;(t=this.schemas).push.apply(t,e.schemas)},e.prototype.include=function(e){return(-1===this.focusOffset||T(e,this.focusOffset))&&e!==this.exclude},e.prototype.newSub=function(){return new e(-1,this.exclude)},e}(),C=function(){function e(){}return Object.defineProperty(e.prototype,"schemas",{get:function(){return[]},enumerable:!0,configurable:!0}),e.prototype.add=function(e){},e.prototype.merge=function(e){},e.prototype.include=function(e){return!0},e.prototype.newSub=function(){return this},e.instance=new e,e}(),j=function(){function e(){this.problems=[],this.propertiesMatches=0,this.propertiesValueMatches=0,this.primaryValueMatches=0,this.enumValueMatch=!1,this.enumValues=null}return e.prototype.hasProblems=function(){return!!this.problems.length},e.prototype.mergeAll=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t]
this.merge(n)}},e.prototype.merge=function(e){this.problems=this.problems.concat(e.problems)},e.prototype.mergeEnumValues=function(e){if(!this.enumValueMatch&&!e.enumValueMatch&&this.enumValues&&e.enumValues){this.enumValues=this.enumValues.concat(e.enumValues)
for(var t=0,r=this.problems;t<r.length;t++){var n=r[t]
n.code===o.ErrorCode.EnumValueMismatch&&(n.message=c("enumWarning","Value is not accepted. Valid values: {0}.",this.enumValues.map((function(e){return JSON.stringify(e)})).join(", ")))}}},e.prototype.mergePropertyMatch=function(e){this.merge(e),this.propertiesMatches++,(e.enumValueMatch||!e.hasProblems()&&e.propertiesMatches)&&this.propertiesValueMatches++,e.enumValueMatch&&e.enumValues&&1===e.enumValues.length&&this.primaryValueMatches++},e.prototype.compare=function(e){var t=this.hasProblems()
return t!==e.hasProblems()?t?-1:1:this.enumValueMatch!==e.enumValueMatch?e.enumValueMatch?-1:1:this.primaryValueMatches!==e.primaryValueMatches?this.primaryValueMatches-e.primaryValueMatches:this.propertiesValueMatches!==e.propertiesValueMatches?this.propertiesValueMatches-e.propertiesValueMatches:this.propertiesMatches-e.propertiesMatches},e}()
function k(e){return r.getNodeValue(e)}function T(e,t,r){return void 0===r&&(r=!1),t>=e.offset&&t<e.offset+e.length||r&&t===e.offset+e.length}t.ValidationResult=j,t.newJSONDocument=function(e,t){return void 0===t&&(t=[]),new O(e,t,[])},t.getNodeValue=k,t.getNodePath=function(e){return r.getNodePath(e)},t.contains=T
var O=function(){function e(e,t,r){void 0===t&&(t=[]),void 0===r&&(r=[]),this.root=e,this.syntaxErrors=t,this.comments=r}return e.prototype.getNodeFromOffset=function(e,t){if(void 0===t&&(t=!1),this.root)return r.findNodeAtOffset(this.root,e,t)},e.prototype.visit=function(e){if(this.root){var t=function(r){var n=e(r),o=r.children
if(Array.isArray(o))for(var i=0;i<o.length&&n;i++)n=t(o[i])
return n}
t(this.root)}},e.prototype.validate=function(e,t){if(this.root&&t){var r=new j
return A(this.root,t,r,C.instance),r.problems.map((function(t){var r=s.Range.create(e.positionAt(t.location.offset),e.positionAt(t.location.offset+t.location.length))
return s.Diagnostic.create(r,t.message,t.severity,t.code)}))}return null},e.prototype.getMatchingSchemas=function(e,t,r){void 0===t&&(t=-1),void 0===r&&(r=null)
var n=new S(t,r)
return this.root&&e&&A(this.root,e,new j,n),n.schemas},e}()
function A(e,t,r,i){if(e&&i.include(e)){switch(e.type){case"object":!function(e,t,r,o){for(var i=Object.create(null),a=[],u=0,f=e.properties;u<f.length;u++){i[J=(b=f[u]).keyNode.value]=b.valueNode,a.push(J)}if(Array.isArray(t.required))for(var l=0,d=t.required;l<d.length;l++){if(!i[P=d[l]]){var p=e.parent&&"property"===e.parent.type&&e.parent.keyNode,h=p?{offset:p.offset,length:p.length}:{offset:e.offset,length:1}
r.problems.push({location:h,severity:s.DiagnosticSeverity.Warning,message:c("MissingRequiredPropWarning",'Missing property "{0}".',P)})}}var m=function(e){for(var t=a.indexOf(e);0<=t;)a.splice(t,1),t=a.indexOf(e)}
if(t.properties)for(var g=0,v=Object.keys(t.properties);g<v.length;g++){m(P=v[g])
var y=t.properties[P]
if(_=i[P])if(n.isBoolean(y))if(y)r.propertiesMatches++,r.propertiesValueMatches++
else{var b=_.parent
r.problems.push({location:{offset:b.keyNode.offset,length:b.keyNode.length},severity:s.DiagnosticSeverity.Warning,message:t.errorMessage||c("DisallowedExtraPropWarning","Property {0} is not allowed.",P)})}else{A(_,y,M=new j,o),r.mergePropertyMatch(M)}}if(t.patternProperties)for(var S=0,k=Object.keys(t.patternProperties);S<k.length;S++)for(var T=k[S],O=new RegExp(T),E=0,I=a.slice(0);E<I.length;E++){var P=I[E]
if(O.test(P))if(m(P),_=i[P]){y=t.patternProperties[T]
if(n.isBoolean(y))if(y)r.propertiesMatches++,r.propertiesValueMatches++
else{b=_.parent
r.problems.push({location:{offset:b.keyNode.offset,length:b.keyNode.length},severity:s.DiagnosticSeverity.Warning,message:t.errorMessage||c("DisallowedExtraPropWarning","Property {0} is not allowed.",P)})}else A(_,y,M=new j,o),r.mergePropertyMatch(M)}}if("object"==typeof t.additionalProperties)for(var w=0,N=a;w<N.length;w++){if(_=i[P=N[w]]){var M=new j
A(_,t.additionalProperties,M,o),r.mergePropertyMatch(M)}}else if(!1===t.additionalProperties&&0<a.length)for(var D=0,V=a;D<V.length;D++){var _
if(_=i[P=V[D]]){b=_.parent
r.problems.push({location:{offset:b.keyNode.offset,length:b.keyNode.length},severity:s.DiagnosticSeverity.Warning,message:t.errorMessage||c("DisallowedExtraPropWarning","Property {0} is not allowed.",P)})}}if(n.isNumber(t.maxProperties)&&e.properties.length>t.maxProperties&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("MaxPropWarning","Object has more properties than limit of {0}.",t.maxProperties)}),n.isNumber(t.minProperties)&&e.properties.length<t.minProperties&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("MinPropWarning","Object has fewer properties than the required number of {0}",t.minProperties)}),t.dependencies)for(var F=0,R=Object.keys(t.dependencies);F<R.length;F++){if(i[J=R[F]]){var L=t.dependencies[J]
if(Array.isArray(L))for(var $=0,q=L;$<q.length;$++){var W=q[$]
i[W]?r.propertiesValueMatches++:r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("RequiredDependentPropWarning","Object is missing property {0} required by property {1}.",W,J)})}else if(y=x(L))A(e,y,M=new j,o),r.mergePropertyMatch(M)}}var K=x(t.propertyNames)
if(K)for(var U=0,B=e.properties;U<B.length;U++){var J;(J=B[U].keyNode)&&A(J,K,r,C.instance)}}(e,t,r,i)
break
case"array":!function(e,t,r,o){if(Array.isArray(t.items)){for(var i=t.items,a=0;a<i.length;a++){var u=x(i[a]),f=new j;(m=e.items[a])?(A(m,u,f,o),r.mergePropertyMatch(f)):e.items.length>=i.length&&r.propertiesValueMatches++}if(e.items.length>i.length)if("object"==typeof t.additionalItems)for(var l=i.length;l<e.items.length;l++){f=new j
A(e.items[l],t.additionalItems,f,o),r.mergePropertyMatch(f)}else!1===t.additionalItems&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("additionalItemsWarning","Array has too many items according to schema. Expected {0} or fewer.",i.length)})}else{var d=x(t.items)
if(d)for(var p=0,h=e.items;p<h.length;p++){var m
A(m=h[p],d,f=new j,o),r.mergePropertyMatch(f)}}var g=x(t.contains)
g&&(e.items.some((function(e){var t=new j
return A(e,g,t,C.instance),!t.hasProblems()}))||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:t.errorMessage||c("requiredItemMissingWarning","Array does not contain required item.")}))
if(n.isNumber(t.minItems)&&e.items.length<t.minItems&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("minItemsWarning","Array has too few items. Expected {0} or more.",t.minItems)}),n.isNumber(t.maxItems)&&e.items.length>t.maxItems&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("maxItemsWarning","Array has too many items. Expected {0} or fewer.",t.maxItems)}),!0===t.uniqueItems){var v=k(e)
v.some((function(e,t){return t!==v.lastIndexOf(e)}))&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("uniqueItemsWarning","Array has duplicate items.")})}}(e,t,r,i)
break
case"string":!function(e,t,r,o){(n.isNumber(t.minLength)&&e.value.length<t.minLength&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("minLengthWarning","String is shorter than the minimum length of {0}.",t.minLength)}),n.isNumber(t.maxLength)&&e.value.length>t.maxLength&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("maxLengthWarning","String is longer than the maximum length of {0}.",t.maxLength)}),n.isString(t.pattern))&&(new RegExp(t.pattern).test(e.value)||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:t.patternErrorMessage||t.errorMessage||c("patternWarning",'String does not match the pattern of "{0}".',t.pattern)}))
if(t.format)switch(t.format){case"uri":case"uri-reference":var i=void 0
if(e.value)try{a.default.parse(e.value).scheme||"uri"!==t.format||(i=c("uriSchemeMissing","URI with a scheme is expected."))}catch(e){i=e.message}else i=c("uriEmpty","URI expected.")
i&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:t.patternErrorMessage||t.errorMessage||c("uriFormatWarning","String is not a URI: {0}",i)})
break
case"email":e.value.match(f)||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:t.patternErrorMessage||t.errorMessage||c("emailFormatWarning","String is not an e-mail address.")})
break
case"color-hex":e.value.match(u)||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:t.patternErrorMessage||t.errorMessage||c("colorHexFormatWarning","Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.")})}}(e,t,r)
break
case"number":!function(e,t,r,o){var i=e.value
function a(e,t){return n.isNumber(t)?t:n.isBoolean(t)&&t?e:void 0}function u(e,t){if(!n.isBoolean(t)||!t)return e}n.isNumber(t.multipleOf)&&i%t.multipleOf!=0&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("multipleOfWarning","Value is not divisible by {0}.",t.multipleOf)})
var f=a(t.minimum,t.exclusiveMinimum)
n.isNumber(f)&&i<=f&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("exclusiveMinimumWarning","Value is below the exclusive minimum of {0}.",f)})
var l=a(t.maximum,t.exclusiveMaximum)
n.isNumber(l)&&l<=i&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("exclusiveMaximumWarning","Value is above the exclusive maximum of {0}.",l)})
var d=u(t.minimum,t.exclusiveMinimum)
n.isNumber(d)&&i<d&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("minimumWarning","Value is below the minimum of {0}.",d)})
var p=u(t.maximum,t.exclusiveMaximum)
n.isNumber(p)&&p<i&&r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("maximumWarning","Value is above the maximum of {0}.",p)})}(e,t,r)
break
case"property":return A(e.valueNode,t,r,i)}!function(){function a(t){return e.type===t||"integer"===t&&"number"===e.type&&e.isInteger}if(Array.isArray(t.type)?t.type.some(a)||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:t.errorMessage||c("typeArrayMismatchWarning","Incorrect type. Expected one of {0}.",t.type.join(", "))}):t.type&&(a(t.type)||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:t.errorMessage||c("typeMismatchWarning",'Incorrect type. Expected "{0}".',t.type)})),Array.isArray(t.allOf))for(var u=0,f=t.allOf;u<f.length;u++){var l=f[u]
A(e,x(l),r,i)}var d=x(t.not)
if(d){var p=new j,h=i.newSub()
A(e,d,p,h),p.hasProblems()||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,message:c("notSchemaWarning","Matches a schema that is not allowed.")})
for(var m=0,g=h.schemas;m<g.length;m++){var v=g[m]
v.inverted=!v.inverted,i.add(v)}}var y=function(t,n){for(var o=[],a=null,u=0,f=t;u<f.length;u++){var l=x(f[u]),d=new j,p=i.newSub()
if(A(e,l,d,p),d.hasProblems()||o.push(l),a)if(n||d.hasProblems()||a.validationResult.hasProblems()){var h=d.compare(a.validationResult)
0<h?a={schema:l,validationResult:d,matchingSchemas:p}:0===h&&(a.matchingSchemas.merge(p),a.validationResult.mergeEnumValues(d))}else a.matchingSchemas.merge(p),a.validationResult.propertiesMatches+=d.propertiesMatches,a.validationResult.propertiesValueMatches+=d.propertiesValueMatches
else a={schema:l,validationResult:d,matchingSchemas:p}}return 1<o.length&&n&&r.problems.push({location:{offset:e.offset,length:1},severity:s.DiagnosticSeverity.Warning,message:c("oneOfWarning","Matches multiple schemas when only one must validate.")}),null!==a&&(r.merge(a.validationResult),r.propertiesMatches+=a.validationResult.propertiesMatches,r.propertiesValueMatches+=a.validationResult.propertiesValueMatches,i.merge(a.matchingSchemas)),o.length}
Array.isArray(t.anyOf)&&y(t.anyOf,!1),Array.isArray(t.oneOf)&&y(t.oneOf,!0)
var b,S,C,T,O,E,I=function(t){var n=new j,o=i.newSub()
A(e,x(t),n,o),r.merge(n),r.propertiesMatches+=n.propertiesMatches,r.propertiesValueMatches+=n.propertiesValueMatches,i.merge(o)},P=x(t.if)
if(P&&(b=P,S=x(t.then),C=x(t.else),T=x(b),O=new j,E=i.newSub(),A(e,T,O,E),i.merge(E),O.hasProblems()?C&&I(C):S&&I(S)),Array.isArray(t.enum)){for(var w=k(e),N=!1,M=0,D=t.enum;M<D.length;M++){var V=D[M]
if(n.equals(w,V)){N=!0
break}}r.enumValues=t.enum,(r.enumValueMatch=N)||r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,code:o.ErrorCode.EnumValueMismatch,message:t.errorMessage||c("enumWarning","Value is not accepted. Valid values: {0}.",t.enum.map((function(e){return JSON.stringify(e)})).join(", "))})}if(n.isDefined(t.const)){w=k(e)
n.equals(w,t.const)?r.enumValueMatch=!0:(r.problems.push({location:{offset:e.offset,length:e.length},severity:s.DiagnosticSeverity.Warning,code:o.ErrorCode.EnumValueMismatch,message:t.errorMessage||c("constWarning","Value must be {0}.",JSON.stringify(t.const))}),r.enumValueMatch=!1),r.enumValues=[t.const]}t.deprecationMessage&&e.parent&&r.problems.push({location:{offset:e.parent.offset,length:e.parent.length},severity:s.DiagnosticSeverity.Warning,message:t.deprecationMessage})}(),i.add({node:e,schema:t})}}t.JSONDocument=O,t.parse=function(e,t){var i=[],a=-1,u=e.getText(),f=r.createScanner(u,!1),l=t&&t.collectComments?[]:void 0
function y(){for(;;){var t=f.scan()
switch(C(),t){case 12:case 13:Array.isArray(l)&&l.push(s.Range.create(e.positionAt(f.getTokenOffset()),e.positionAt(f.getTokenOffset()+f.getTokenLength())))
break
case 15:case 14:break
default:return t}}}function x(t,r,n,o,c){if(void 0===c&&(c=s.DiagnosticSeverity.Error),0===i.length||n!==a){var u=s.Range.create(e.positionAt(n),e.positionAt(o))
i.push(s.Diagnostic.create(u,t,c,r,e.languageId)),a=n}}function S(e,t,r,n,o){void 0===r&&(r=null),void 0===n&&(n=[]),void 0===o&&(o=[])
var i=f.getTokenOffset(),a=f.getTokenOffset()+f.getTokenLength()
if(i===a&&0<i){for(i--;0<i&&/\s/.test(u.charAt(i));)i--
a=i+1}if(x(e,t,i,a),r&&j(r,!1),0<n.length+o.length)for(var s=f.getToken();17!==s;){if(-1!==n.indexOf(s)){y()
break}if(-1!==o.indexOf(s))break
s=y()}return r}function C(){switch(f.getTokenError()){case 4:return S(c("InvalidUnicode","Invalid unicode sequence in string."),o.ErrorCode.InvalidUnicode),!0
case 5:return S(c("InvalidEscapeCharacter","Invalid escape character in string."),o.ErrorCode.InvalidEscapeCharacter),!0
case 3:return S(c("UnexpectedEndOfNumber","Unexpected end of number."),o.ErrorCode.UnexpectedEndOfNumber),!0
case 1:return S(c("UnexpectedEndOfComment","Unexpected end of comment."),o.ErrorCode.UnexpectedEndOfComment),!0
case 2:return S(c("UnexpectedEndOfString","Unexpected end of string."),o.ErrorCode.UnexpectedEndOfString),!0
case 6:return S(c("InvalidCharacter","Invalid characters in string. Control characters must be escaped."),o.ErrorCode.InvalidCharacter),!0}return!1}function j(e,t){return e.length=f.getTokenOffset()+f.getTokenLength()-e.offset,t&&y(),e}function k(t,r){var n=new v(t,f.getTokenOffset()),i=T(n)
if(!i){if(16!==f.getToken())return null
S(c("DoubleQuotesExpected","Property keys must be doublequoted"),o.ErrorCode.Undefined)
var a=new g(n,f.getTokenOffset(),f.getTokenLength())
a.value=f.getTokenValue(),i=a,y()}var u=r[(n.keyNode=i).value]
if(r[i.value]=u?(x(c("DuplicateKeyWarning","Duplicate object key"),o.ErrorCode.DuplicateKey,n.keyNode.offset,n.keyNode.offset+n.keyNode.length,s.DiagnosticSeverity.Warning),"object"==typeof u&&x(c("DuplicateKeyWarning","Duplicate object key"),o.ErrorCode.DuplicateKey,u.keyNode.offset,u.keyNode.offset+u.keyNode.length,s.DiagnosticSeverity.Warning),!0):n,6===f.getToken())n.colonOffset=f.getTokenOffset(),y()
else if(S(c("ColonExpected","Colon expected"),o.ErrorCode.ColonExpected),10===f.getToken()&&e.positionAt(i.offset+i.length).line<e.positionAt(f.getTokenOffset()).line)return n.length=i.length,n
var l=A(n,i.value)
return l?(n.valueNode=l,n.length=l.offset+l.length-n.offset,n):S(c("ValueExpected","Value expected"),o.ErrorCode.ValueExpected,n,[],[2,5])}function T(e){if(10!==f.getToken())return null
var t=new g(e,f.getTokenOffset())
return t.value=f.getTokenValue(),j(t,!0)}function A(e,t){return function(e){if(3!==f.getToken())return null
var t=new h(e,f.getTokenOffset())
y()
for(var r=!1;4!==f.getToken()&&17!==f.getToken();){if(5===f.getToken()){r||S(c("ValueExpected","Value expected"),o.ErrorCode.ValueExpected)
var n=f.getTokenOffset()
if(y(),4===f.getToken()){r&&x(c("TrailingComma","Trailing comma"),o.ErrorCode.TrailingComma,n,n+1)
continue}}else r&&S(c("ExpectedComma","Expected comma"),o.ErrorCode.CommaExpected)
var i=A(t,0)
i?t.items.push(i):S(c("PropertyExpected","Value expected"),o.ErrorCode.ValueExpected,null,[],[4,5]),r=!0}return 4!==f.getToken()?S(c("ExpectedCloseBracket","Expected comma or closing bracket"),o.ErrorCode.CommaOrCloseBacketExpected,t):j(t,!0)}(e)||function(e){if(1!==f.getToken())return null
var t=new b(e,f.getTokenOffset()),r=Object.create(null)
y()
for(var n=!1;2!==f.getToken()&&17!==f.getToken();){if(5===f.getToken()){n||S(c("PropertyExpected","Property expected"),o.ErrorCode.PropertyExpected)
var i=f.getTokenOffset()
if(y(),2===f.getToken()){n&&x(c("TrailingComma","Trailing comma"),o.ErrorCode.TrailingComma,i,i+1)
continue}}else n&&S(c("ExpectedComma","Expected comma"),o.ErrorCode.CommaExpected)
var a=k(t,r)
a?t.properties.push(a):S(c("PropertyExpected","Property expected"),o.ErrorCode.PropertyExpected,null,[],[2,5]),n=!0}return 2!==f.getToken()?S(c("ExpectedCloseBrace","Expected comma or closing brace"),o.ErrorCode.CommaOrCloseBraceExpected,t):j(t,!0)}(e)||T(e)||function(e){if(11!==f.getToken())return null
var t=new m(e,f.getTokenOffset())
if(0===f.getTokenError()){var r=f.getTokenValue()
try{var i=JSON.parse(r)
if(!n.isNumber(i))return S(c("InvalidNumberFormat","Invalid number format."),o.ErrorCode.Undefined,t)
t.value=i}catch(e){return S(c("InvalidNumberFormat","Invalid number format."),o.ErrorCode.Undefined,t)}t.isInteger=-1===r.indexOf(".")}return j(t,!0)}(e)||function(e){switch(f.getToken()){case 7:return j(new d(e,f.getTokenOffset()),!0)
case 8:return j(new p(e,!0,f.getTokenOffset()),!0)
case 9:return j(new p(e,!1,f.getTokenOffset()),!0)
default:return null}}(e)}var E=null
return 17!==y()&&((E=A(null))?17!==f.getToken()&&S(c("End of file expected","End of file expected."),o.ErrorCode.Undefined):S(c("Invalid symbol","Expected a JSON object, array or literal."),o.ErrorCode.Undefined)),new O(E,i,l)}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/utils/json",["require","exports"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.stringifyObject=function e(t,r,n){if(null===t||"object"!=typeof t)return n(t)
var o=r+"\t"
if(Array.isArray(t)){if(0===t.length)return"[]"
for(var i="[\n",a=0;a<t.length;a++)i+=o+e(t[a],o,n),a<t.length-1&&(i+=","),i+="\n"
return i+(r+"]")}var s=Object.keys(t)
if(0===s.length)return"{}"
for(i="{\n",a=0;a<s.length;a++){var c=s[a]
i+=o+JSON.stringify(c)+": "+e(t[c],o,n),a<s.length-1&&(i+=","),i+="\n"}return i+(r+"}")}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/utils/strings",["require","exports"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.startsWith=function(e,t){if(e.length<t.length)return!1
for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1
return!0},t.endsWith=function(e,t){var r=e.length-t.length
return 0<r?e.lastIndexOf(t)===r:0===r&&e===t},t.convertSimple2RegExpPattern=function(e){return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&").replace(/[\*]/g,".*")},t.repeat=function(e,t){for(var r="";0<t;)1==(1&t)&&(r+=e),e+=e,t>>>=1
return r}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonCompletion",["require","exports","../parser/jsonParser","jsonc-parser","../utils/json","../utils/strings","../utils/objects","vscode-languageserver-types","vscode-nls"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("../parser/jsonParser"),n=e("jsonc-parser"),o=e("../utils/json"),i=e("../utils/strings"),a=e("../utils/objects"),s=e("vscode-languageserver-types"),c=e("vscode-nls").loadMessageBundle(),u=function(){function e(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=Promise),void 0===n&&(n={}),this.schemaService=e,this.contributions=t,this.promiseConstructor=r,this.clientCapabilities=n,this.templateVarIdCounter=0}return e.prototype.doResolve=function(e){for(var t=this.contributions.length-1;0<=t;t--)if(this.contributions[t].resolveCompletion){var r=this.contributions[t].resolveCompletion(e)
if(r)return r}return this.promiseConstructor.resolve(e)},e.prototype.doComplete=function(e,t,n){var o=this,i={items:[],isIncomplete:!1},a=e.offsetAt(t),c=n.getNodeFromOffset(a,!0)
if(this.isInComment(e,c?c.offset:0,a))return Promise.resolve(i)
var u=this.getCurrentWord(e,a),f=null
if(!c||"string"!==c.type&&"number"!==c.type&&"boolean"!==c.type&&"null"!==c.type){var l=a-u.length
0<l&&'"'===e.getText()[l-1]&&l--,f=s.Range.create(e.positionAt(l),t)}else f=s.Range.create(e.positionAt(c.offset),e.positionAt(c.offset+c.length))
var d={},p={add:function(e){var t=d[e.label]
t?t.documentation||(t.documentation=e.documentation):(d[e.label]=e,f&&(e.textEdit=s.TextEdit.replace(f,e.insertText)),i.items.push(e))},setAsIncomplete:function(){i.isIncomplete=!0},error:function(e){console.error(e)},log:function(e){console.log(e)},getNumberOfProposals:function(){return i.items.length}}
return this.schemaService.getSchemaForResource(e.uri,n).then((function(t){var l=[],h=!0,m="",g=null
if(c&&"string"===c.type){var v=c.parent
v&&"property"===v.type&&v.keyNode===c&&(h=!v.valueNode,g=v,m=e.getText().substr(c.offset+1,c.length-2),v&&(c=v.parent))}if(c&&"object"===c.type){if(c.offset===a)return i
c.properties.forEach((function(e){g&&g===e||(d[e.keyNode.value]=s.CompletionItem.create("__"))}))
var y=""
h&&(y=o.evaluateSeparatorAfter(e,e.offsetAt(f.end))),t?o.getPropertyCompletions(t,n,c,h,y,p):o.getSchemaLessPropertyCompletions(n,c,m,p)
var b=r.getNodePath(c)
o.contributions.forEach((function(t){var r=t.collectPropertyCompletions(e.uri,b,u,h,""===y,p)
r&&l.push(r)})),!t&&0<u.length&&'"'!==e.getText().charAt(a-u.length-1)&&(p.add({kind:s.CompletionItemKind.Property,label:o.getLabelForValue(u),insertText:o.getInsertTextForProperty(u,null,!1,y),insertTextFormat:s.InsertTextFormat.Snippet,documentation:""}),p.setAsIncomplete())}var x={}
return t?o.getValueCompletions(t,n,c,a,e,p,x):o.getSchemaLessValueCompletions(n,c,a,e,p),0<o.contributions.length&&o.getContributedValueCompletions(n,c,a,e,p,l),o.promiseConstructor.all(l).then((function(){if(0===p.getNumberOfProposals()){var t=a
!c||"string"!==c.type&&"number"!==c.type&&"boolean"!==c.type&&"null"!==c.type||(t=c.offset+c.length)
var r=o.evaluateSeparatorAfter(e,t)
o.addFillerValueCompletions(x,r,p)}return i}))}))},e.prototype.getPropertyCompletions=function(e,t,r,n,o,a){var c=this
t.getMatchingSchemas(e.schema,r.offset).forEach((function(e){if(e.node===r&&!e.inverted){var t=e.schema.properties
t&&Object.keys(t).forEach((function(e){var r=t[e]
if("object"==typeof r&&!r.deprecationMessage&&!r.doNotSuggest){var u={kind:s.CompletionItemKind.Property,label:c.sanitizeLabel(e),insertText:c.getInsertTextForProperty(e,r,n,o),insertTextFormat:s.InsertTextFormat.Snippet,filterText:c.getFilterTextForValue(e),documentation:c.fromMarkup(r.markdownDescription)||r.description||""}
i.endsWith(u.insertText,"$1"+o)&&(u.command={title:"Suggest",command:"editor.action.triggerSuggest"}),a.add(u)}}))}}))},e.prototype.getSchemaLessPropertyCompletions=function(e,t,r,n){var o=this,i=function(e){e.properties.forEach((function(e){var t=e.keyNode.value
n.add({kind:s.CompletionItemKind.Property,label:o.sanitizeLabel(t),insertText:o.getInsertTextForValue(t,""),insertTextFormat:s.InsertTextFormat.Snippet,filterText:o.getFilterTextForValue(t),documentation:""})}))}
if(t.parent)if("property"===t.parent.type){var a=t.parent.keyNode.value
e.visit((function(e){return"property"===e.type&&e!==t.parent&&e.keyNode.value===a&&e.valueNode&&"object"===e.valueNode.type&&i(e.valueNode),!0}))}else"array"===t.parent.type&&t.parent.items.forEach((function(e){"object"===e.type&&e!==t&&i(e)}))
else"object"===t.type&&n.add({kind:s.CompletionItemKind.Property,label:"$schema",insertText:this.getInsertTextForProperty("$schema",null,!0,""),insertTextFormat:s.InsertTextFormat.Snippet,documentation:"",filterText:this.getFilterTextForValue("$schema")})},e.prototype.getSchemaLessValueCompletions=function(e,t,n,o,i){var a=this,c=n
if(!t||"string"!==t.type&&"number"!==t.type&&"boolean"!==t.type&&"null"!==t.type||(c=t.offset+t.length,t=t.parent),!t)return i.add({kind:this.getSuggestionKind("object"),label:"Empty object",insertText:this.getInsertTextForValue({},""),insertTextFormat:s.InsertTextFormat.Snippet,documentation:""}),void i.add({kind:this.getSuggestionKind("array"),label:"Empty array",insertText:this.getInsertTextForValue([],""),insertTextFormat:s.InsertTextFormat.Snippet,documentation:""})
var u=this.evaluateSeparatorAfter(o,c),f=function(e){r.contains(e.parent,n,!0)||i.add({kind:a.getSuggestionKind(e.type),label:a.getLabelTextForMatchingNode(e,o),insertText:a.getInsertTextForMatchingNode(e,o,u),insertTextFormat:s.InsertTextFormat.Snippet,documentation:""}),"boolean"===e.type&&a.addBooleanValueCompletion(!e.value,u,i)}
if("property"===t.type&&n>t.colonOffset){var l=t.valueNode
if(l&&(n>l.offset+l.length||"object"===l.type||"array"===l.type))return
var d=t.keyNode.value
e.visit((function(e){return"property"===e.type&&e.keyNode.value===d&&e.valueNode&&f(e.valueNode),!0})),"$schema"===d&&t.parent&&!t.parent.parent&&this.addDollarSchemaCompletions(u,i)}if("array"===t.type)if(t.parent&&"property"===t.parent.type){var p=t.parent.keyNode.value
e.visit((function(e){return"property"===e.type&&e.keyNode.value===p&&e.valueNode&&"array"===e.valueNode.type&&e.valueNode.items.forEach(f),!0}))}else t.items.forEach(f)},e.prototype.getValueCompletions=function(e,t,r,n,o,i,a){var s=this,c=n,u=null,f=null
if(!r||"string"!==r.type&&"number"!==r.type&&"boolean"!==r.type&&"null"!==r.type||(c=r.offset+r.length,r=(f=r).parent),r){if("property"===r.type&&n>r.colonOffset){var l=r.valueNode
if(l&&n>l.offset+l.length)return
u=r.keyNode.value,r=r.parent}if(r&&(null!==u||"array"===r.type)){var d=this.evaluateSeparatorAfter(o,c)
t.getMatchingSchemas(e.schema,r.offset,f).forEach((function(e){if(e.node===r&&!e.inverted&&e.schema){if("array"===r.type&&e.schema.items)if(Array.isArray(e.schema.items)){var t=s.findItemAtOffset(r,o,n)
t<e.schema.items.length&&s.addSchemaValueCompletions(e.schema.items[t],d,i,a)}else s.addSchemaValueCompletions(e.schema.items,d,i,a)
if(e.schema.properties){var c=e.schema.properties[u]
c&&s.addSchemaValueCompletions(c,d,i,a)}}})),"$schema"!==u||r.parent||this.addDollarSchemaCompletions(d,i),a.boolean&&(this.addBooleanValueCompletion(!0,d,i),this.addBooleanValueCompletion(!1,d,i)),a.null&&this.addNullValueCompletion(d,i)}}else this.addSchemaValueCompletions(e.schema,"",i,a)},e.prototype.getContributedValueCompletions=function(e,t,n,o,i,a){if(t){if("string"!==t.type&&"number"!==t.type&&"boolean"!==t.type&&"null"!==t.type||(t=t.parent),"property"===t.type&&n>t.colonOffset){var s=t.keyNode.value,c=t.valueNode
if(!c||n<=c.offset+c.length){var u=r.getNodePath(t.parent)
this.contributions.forEach((function(e){var t=e.collectValueCompletions(o.uri,u,s,i)
t&&a.push(t)}))}}}else this.contributions.forEach((function(e){var t=e.collectDefaultCompletions(o.uri,i)
t&&a.push(t)}))},e.prototype.addSchemaValueCompletions=function(e,t,r,n){var o=this
"object"==typeof e&&(this.addEnumValueCompletions(e,t,r),this.addDefaultValueCompletions(e,t,r),this.collectTypes(e,n),Array.isArray(e.allOf)&&e.allOf.forEach((function(e){return o.addSchemaValueCompletions(e,t,r,n)})),Array.isArray(e.anyOf)&&e.anyOf.forEach((function(e){return o.addSchemaValueCompletions(e,t,r,n)})),Array.isArray(e.oneOf)&&e.oneOf.forEach((function(e){return o.addSchemaValueCompletions(e,t,r,n)})))},e.prototype.addDefaultValueCompletions=function(e,t,r,n){var o=this
void 0===n&&(n=0)
var i=!1
if(a.isDefined(e.default)){for(var u=e.type,f=e.default,l=n;0<l;l--)f=[f],u="array"
r.add({kind:this.getSuggestionKind(u),label:this.getLabelForValue(f),insertText:this.getInsertTextForValue(f,t),insertTextFormat:s.InsertTextFormat.Snippet,detail:c("json.suggest.default","Default value")}),i=!0}Array.isArray(e.examples)&&e.examples.forEach((function(a){for(var c=e.type,u=a,f=n;0<f;f--)u=[u],c="array"
r.add({kind:o.getSuggestionKind(c),label:o.getLabelForValue(u),insertText:o.getInsertTextForValue(u,t),insertTextFormat:s.InsertTextFormat.Snippet}),i=!0})),Array.isArray(e.defaultSnippets)&&e.defaultSnippets.forEach((function(c){var u,f,l=e.type,d=c.body,p=c.label
if(a.isDefined(d)){e.type
for(var h=n;0<h;h--)d=[d]
u=o.getInsertTextForSnippetValue(d,t),f=o.getFilterTextForSnippetValue(d),p=p||o.getLabelForSnippetValue(d)}else if("string"==typeof c.bodyText){var m="",g="",v=""
for(h=n;0<h;h--)m=m+v+"[\n",g=g+"\n"+v+"]",v+="\t",l="array"
u=m+v+c.bodyText.split("\n").join("\n"+v)+g+t,p=p||o.sanitizeLabel(u),f=u.replace(/[\n]/g,"")}r.add({kind:o.getSuggestionKind(l),label:p,documentation:o.fromMarkup(c.markdownDescription)||c.description,insertText:u,insertTextFormat:s.InsertTextFormat.Snippet,filterText:f}),i=!0})),i||"object"!=typeof e.items||Array.isArray(e.items)||this.addDefaultValueCompletions(e.items,t,r,n+1)},e.prototype.addEnumValueCompletions=function(e,t,r){if(a.isDefined(e.const)&&r.add({kind:this.getSuggestionKind(e.type),label:this.getLabelForValue(e.const),insertText:this.getInsertTextForValue(e.const,t),insertTextFormat:s.InsertTextFormat.Snippet,documentation:this.fromMarkup(e.markdownDescription)||e.description}),Array.isArray(e.enum))for(var n=0,o=e.enum.length;n<o;n++){var i=e.enum[n],c=this.fromMarkup(e.markdownDescription)||e.description
e.markdownEnumDescriptions&&n<e.markdownEnumDescriptions.length&&this.doesSupportMarkdown()?c=this.fromMarkup(e.markdownEnumDescriptions[n]):e.enumDescriptions&&n<e.enumDescriptions.length&&(c=e.enumDescriptions[n]),r.add({kind:this.getSuggestionKind(e.type),label:this.getLabelForValue(i),insertText:this.getInsertTextForValue(i,t),insertTextFormat:s.InsertTextFormat.Snippet,documentation:c})}},e.prototype.collectTypes=function(e,t){if(!Array.isArray(e.enum)&&!a.isDefined(e.const)){var r=e.type
Array.isArray(r)?r.forEach((function(e){return t[e]=!0})):t[r]=!0}},e.prototype.addFillerValueCompletions=function(e,t,r){e.object&&r.add({kind:this.getSuggestionKind("object"),label:"{}",insertText:this.getInsertTextForGuessedValue({},t),insertTextFormat:s.InsertTextFormat.Snippet,detail:c("defaults.object","New object"),documentation:""}),e.array&&r.add({kind:this.getSuggestionKind("array"),label:"[]",insertText:this.getInsertTextForGuessedValue([],t),insertTextFormat:s.InsertTextFormat.Snippet,detail:c("defaults.array","New array"),documentation:""})},e.prototype.addBooleanValueCompletion=function(e,t,r){r.add({kind:this.getSuggestionKind("boolean"),label:e?"true":"false",insertText:this.getInsertTextForValue(e,t),insertTextFormat:s.InsertTextFormat.Snippet,documentation:""})},e.prototype.addNullValueCompletion=function(e,t){t.add({kind:this.getSuggestionKind("null"),label:"null",insertText:"null"+e,insertTextFormat:s.InsertTextFormat.Snippet,documentation:""})},e.prototype.addDollarSchemaCompletions=function(e,t){var r=this
this.schemaService.getRegisteredSchemaIds((function(e){return"http"===e||"https"===e})).forEach((function(n){return t.add({kind:s.CompletionItemKind.Module,label:r.getLabelForValue(n),filterText:r.getFilterTextForValue(n),insertText:r.getInsertTextForValue(n,e),insertTextFormat:s.InsertTextFormat.Snippet,documentation:""})}))},e.prototype.sanitizeLabel=function(e){return 57<(e=e.replace(/[\n]/g,"↵")).length&&(e=e.substr(0,57).trim()+"..."),e},e.prototype.getLabelForValue=function(e){return this.sanitizeLabel(JSON.stringify(e))},e.prototype.getFilterTextForValue=function(e){return JSON.stringify(e)},e.prototype.getFilterTextForSnippetValue=function(e){return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g,"$1")},e.prototype.getLabelForSnippetValue=function(e){var t=JSON.stringify(e)
return t=t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g,"$1"),this.sanitizeLabel(t)},e.prototype.getInsertTextForPlainText=function(e){return e.replace(/[\\\$\}]/g,"\\$&")},e.prototype.getInsertTextForValue=function(e,t){var r=JSON.stringify(e,null,"\t")
return"{}"===r?"{$1}"+t:"[]"===r?"[$1]"+t:this.getInsertTextForPlainText(r+t)},e.prototype.getInsertTextForSnippetValue=function(e,t){return o.stringifyObject(e,"",(function(e){return"string"==typeof e&&"^"===e[0]?e.substr(1):JSON.stringify(e)}))+t},e.prototype.getInsertTextForGuessedValue=function(e,t){switch(typeof e){case"object":return null===e?"${1:null}"+t:this.getInsertTextForValue(e,t)
case"string":var r=JSON.stringify(e)
return r=r.substr(1,r.length-2),'"${1:'+(r=this.getInsertTextForPlainText(r))+'}"'+t
case"number":case"boolean":return"${1:"+JSON.stringify(e)+"}"+t}return this.getInsertTextForValue(e,t)},e.prototype.getSuggestionKind=function(e){if(Array.isArray(e)){var t=e
e=0<t.length?t[0]:null}if(!e)return s.CompletionItemKind.Value
switch(e){case"string":return s.CompletionItemKind.Value
case"object":return s.CompletionItemKind.Module
case"property":return s.CompletionItemKind.Property
default:return s.CompletionItemKind.Value}},e.prototype.getLabelTextForMatchingNode=function(e,t){switch(e.type){case"array":return"[]"
case"object":return"{}"
default:return t.getText().substr(e.offset,e.length)}},e.prototype.getInsertTextForMatchingNode=function(e,t,r){switch(e.type){case"array":return this.getInsertTextForValue([],r)
case"object":return this.getInsertTextForValue({},r)
default:var n=t.getText().substr(e.offset,e.length)+r
return this.getInsertTextForPlainText(n)}},e.prototype.getInsertTextForProperty=function(e,t,r,n){var o=this.getInsertTextForValue(e,"")
if(!r)return o
var i,s=o+": ",c=0
if(t){if(Array.isArray(t.defaultSnippets)){if(1===t.defaultSnippets.length){var u=t.defaultSnippets[0].body
a.isDefined(u)&&(i=this.getInsertTextForSnippetValue(u,""))}c+=t.defaultSnippets.length}if(t.enum&&(i||1!==t.enum.length||(i=this.getInsertTextForGuessedValue(t.enum[0],"")),c+=t.enum.length),a.isDefined(t.default)&&(i||(i=this.getInsertTextForGuessedValue(t.default,"")),c++),0===c){var f=Array.isArray(t.type)?t.type[0]:t.type
switch(f||(t.properties?f="object":t.items&&(f="array")),f){case"boolean":i="$1"
break
case"string":i='"$1"'
break
case"object":i="{$1}"
break
case"array":i="[$1]"
break
case"number":case"integer":i="${1:0}"
break
case"null":i="${1:null}"
break
default:return o}}}return(!i||1<c)&&(i="$1"),s+i+n},e.prototype.getCurrentWord=function(e,t){for(var r=t-1,n=e.getText();0<=r&&-1===' \t\n\r\v":{[,]}'.indexOf(n.charAt(r));)r--
return n.substring(r+1,t)},e.prototype.evaluateSeparatorAfter=function(e,t){var r=n.createScanner(e.getText(),!0)
switch(r.setPosition(t),r.scan()){case 5:case 2:case 4:case 17:return""
default:return","}},e.prototype.findItemAtOffset=function(e,t,r){for(var o=n.createScanner(t.getText(),!0),i=e.items,a=i.length-1;0<=a;a--){var s=i[a]
if(r>s.offset+s.length)return o.setPosition(s.offset+s.length),5===o.scan()&&r>=o.getTokenOffset()+o.getTokenLength()?a+1:a
if(r>=s.offset)return a}return 0},e.prototype.isInComment=function(e,t,r){var o=n.createScanner(e.getText(),!1)
o.setPosition(t)
for(var i=o.scan();17!==i&&o.getTokenOffset()+o.getTokenLength()<r;)i=o.scan()
return(12===i||13===i)&&o.getTokenOffset()<=r},e.prototype.fromMarkup=function(e){if(e&&this.doesSupportMarkdown())return{kind:s.MarkupKind.Markdown,value:e}},e.prototype.doesSupportMarkdown=function(){if(!a.isDefined(this.supportsMarkdown)){var e=this.clientCapabilities.textDocument&&this.clientCapabilities.textDocument.completion
this.supportsMarkdown=e&&e.completionItem&&Array.isArray(e.completionItem.documentationFormat)&&-1!==e.completionItem.documentationFormat.indexOf(s.MarkupKind.Markdown)}return this.supportsMarkdown},e}()
t.JSONCompletion=u})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonHover",["require","exports","../parser/jsonParser","vscode-languageserver-types"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("../parser/jsonParser"),n=e("vscode-languageserver-types"),o=function(){function e(e,t,r){void 0===t&&(t=[]),this.schemaService=e,this.contributions=t,this.promise=r||Promise}return e.prototype.doHover=function(e,t,o){var a=e.offsetAt(t),s=o.getNodeFromOffset(a)
if(!s||("object"===s.type||"array"===s.type)&&a>s.offset+1&&a<s.offset+s.length-1)return this.promise.resolve(null)
var c=s
if("string"===s.type){var u=s.parent
if(u&&"property"===u.type&&u.keyNode===s&&!(s=u.valueNode))return this.promise.resolve(null)}for(var f=n.Range.create(e.positionAt(c.offset),e.positionAt(c.offset+c.length)),l=function(e){return{contents:e,range:f}},d=r.getNodePath(s),p=this.contributions.length-1;0<=p;p--){var h=this.contributions[p].getInfoContribution(e.uri,d)
if(h)return h.then((function(e){return l(e)}))}return this.schemaService.getSchemaForResource(e.uri,o).then((function(e){if(e){var t=o.getMatchingSchemas(e.schema,s.offset),n=null,a=null,c=null,u=null
t.every((function(e){if(e.node===s&&!e.inverted&&e.schema&&(n=n||e.schema.title,a=a||e.schema.markdownDescription||i(e.schema.description),e.schema.enum)){var t=e.schema.enum.indexOf(r.getNodeValue(s))
e.schema.markdownEnumDescriptions?c=e.schema.markdownEnumDescriptions[t]:e.schema.enumDescriptions&&(c=i(e.schema.enumDescriptions[t])),c&&"string"!=typeof(u=e.schema.enum[t])&&(u=JSON.stringify(u))}return!0}))
var f=""
return n&&(f=i(n)),a&&(0<f.length&&(f+="\n\n"),f+=a),c&&(0<f.length&&(f+="\n\n"),f+="`"+i(u)+"`: "+c),l([f])}return null}))},e}()
function i(e){if(e)return e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm,"$1\n\n$3").replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.JSONHover=o})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonSchemaService",["require","exports","jsonc-parser","vscode-uri","../utils/strings","../parser/jsonParser","vscode-nls"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("jsonc-parser"),n=e("vscode-uri"),o=e("../utils/strings"),i=e("../parser/jsonParser"),a=e("vscode-nls").loadMessageBundle(),s=function(){function e(e){try{this.patternRegExp=new RegExp(o.convertSimple2RegExpPattern(e)+"$")}catch(e){this.patternRegExp=null}this.schemas=[]}return e.prototype.addSchema=function(e){this.schemas.push(e)},e.prototype.matchesPattern=function(e){return this.patternRegExp&&this.patternRegExp.test(e)},e.prototype.getSchemas=function(){return this.schemas},e}(),c=function(){function e(e,t,r){this.service=e,this.url=t,this.dependencies={},r&&(this.unresolvedSchema=this.service.promise.resolve(new u(r)))}return e.prototype.getUnresolvedSchema=function(){return this.unresolvedSchema||(this.unresolvedSchema=this.service.loadSchema(this.url)),this.unresolvedSchema},e.prototype.getResolvedSchema=function(){var e=this
return this.resolvedSchema||(this.resolvedSchema=this.getUnresolvedSchema().then((function(t){return e.service.resolveSchemaContent(t,e.url,e.dependencies)}))),this.resolvedSchema},e.prototype.clearSchema=function(){this.resolvedSchema=null,this.unresolvedSchema=null,this.dependencies={}},e}(),u=function(e,t){void 0===t&&(t=[]),this.schema=e,this.errors=t}
t.UnresolvedSchema=u
var f=function(){function e(e,t){void 0===t&&(t=[]),this.schema=e,this.errors=t}return e.prototype.getSection=function(e){return i.asSchema(this.getSectionRecursive(e,this.schema))},e.prototype.getSectionRecursive=function(e,t){if(!t||"boolean"==typeof t||0===e.length)return t
var r=e.shift()
if(t.properties&&(t.properties[r],1))return this.getSectionRecursive(e,t.properties[r])
if(t.patternProperties)for(var n=0,o=Object.keys(t.patternProperties);n<o.length;n++){var i=o[n]
if(new RegExp(i).test(r))return this.getSectionRecursive(e,t.patternProperties[i])}else{if("object"==typeof t.additionalProperties)return this.getSectionRecursive(e,t.additionalProperties)
if(r.match("[0-9]+"))if(Array.isArray(t.items)){var a=parseInt(r,10)
if(!isNaN(a)&&t.items[a])return this.getSectionRecursive(e,t.items[a])}else if(t.items)return this.getSectionRecursive(e,t.items)}return null},e}()
t.ResolvedSchema=f
var l=function(){function e(e,t,r){this.contextService=t,this.requestService=e,this.promiseConstructor=r||Promise,this.callOnDispose=[],this.contributionSchemas={},this.contributionAssociations={},this.schemasById={},this.filePatternAssociations=[],this.filePatternAssociationById={},this.registeredSchemasIds={}}return e.prototype.getRegisteredSchemaIds=function(e){return Object.keys(this.registeredSchemasIds).filter((function(t){var r=n.default.parse(t).scheme
return"schemaservice"!==r&&(!e||e(r))}))},Object.defineProperty(e.prototype,"promise",{get:function(){return this.promiseConstructor},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){for(;0<this.callOnDispose.length;)this.callOnDispose.pop()()},e.prototype.onResourceChange=function(e){for(var t=this,r=!1,n=[e=this.normalizeId(e)],o=Object.keys(this.schemasById).map((function(e){return t.schemasById[e]}));n.length;)for(var i=n.pop(),a=0;a<o.length;a++){var s=o[a]
s&&(s.url===i||s.dependencies[i])&&(s.url!==i&&n.push(s.url),s.clearSchema(),r=!(o[a]=void 0))}return r},e.prototype.normalizeId=function(e){return n.default.parse(e).toString()},e.prototype.setSchemaContributions=function(e){if(e.schemas){var t=e.schemas
for(var r in t){var n=this.normalizeId(r)
this.contributionSchemas[n]=this.addSchemaHandle(n,t[r])}}if(e.schemaAssociations){var o=e.schemaAssociations
for(var i in o){var a=o[i]
this.contributionAssociations[i]=a
for(var s=this.getOrAddFilePatternAssociation(i),c=0,u=a;c<u.length;c++){var f=u[c]
r=this.normalizeId(f),s.addSchema(r)}}}},e.prototype.addSchemaHandle=function(e,t){var r=new c(this,e,t)
return this.schemasById[e]=r},e.prototype.getOrAddSchemaHandle=function(e,t){return this.schemasById[e]||this.addSchemaHandle(e,t)},e.prototype.getOrAddFilePatternAssociation=function(e){var t=this.filePatternAssociationById[e]
return t||(t=new s(e),this.filePatternAssociationById[e]=t,this.filePatternAssociations.push(t)),t},e.prototype.registerExternalSchema=function(e,t,r){void 0===t&&(t=null)
var n=this.normalizeId(e)
if(this.registeredSchemasIds[n]=!0,t)for(var o=0,i=t;o<i.length;o++){var a=i[o]
this.getOrAddFilePatternAssociation(a).addSchema(n)}return r?this.addSchemaHandle(n,r):this.getOrAddSchemaHandle(n)},e.prototype.clearExternalSchemas=function(){for(var e in this.schemasById={},this.filePatternAssociations=[],this.filePatternAssociationById={},this.registeredSchemasIds={},this.contributionSchemas)this.schemasById[e]=this.contributionSchemas[e],this.registeredSchemasIds[e]=!0
for(var t in this.contributionAssociations)for(var r=this.getOrAddFilePatternAssociation(t),n=0,o=this.contributionAssociations[t];n<o.length;n++){var i=o[n]
e=this.normalizeId(i),r.addSchema(e)}},e.prototype.getResolvedSchema=function(e){var t=this.normalizeId(e),r=this.schemasById[t]
return r?r.getResolvedSchema():this.promise.resolve(null)},e.prototype.loadSchema=function(e){if(this.requestService)return this.requestService(e).then((function(t){if(!t){var n=a("json.schema.nocontent","Unable to load schema from '{0}': No content.",d(e))
return new u({},[n])}var o,i=[]
o=r.parse(t,i)
var s=i.length?[a("json.schema.invalidFormat","Unable to parse content from '{0}': Parse error at offset {1}.",d(e),i[0].offset)]:[]
return new u(o,s)}),(function(e){var t=e.toString(),r=e.toString().split("Error: ")
return 1<r.length&&(t=r[1]),new u({},[t])}))
var t=a("json.schema.norequestservice","Unable to load schema from '{0}'. No schema request service available",d(e))
return this.promise.resolve(new u({},[t]))},e.prototype.resolveSchemaContent=function(e,t,r){var n=this,o=e.errors.slice(0),i=e.schema,s=this.contextService,c=function(e,t,r,n){var i=function(e,t){if(!t)return e
var r=e
return"/"===t[0]&&(t=t.substr(1)),t.split("/").some((function(e){return!(r=r[e])})),r}(t,n)
if(i)for(var s in i)i.hasOwnProperty(s)&&!e.hasOwnProperty(s)&&(e[s]=i[s])
else o.push(a("json.schema.invalidref","$ref '{0}' in '{1}' can not be resolved.",n,r))},u=function(e,t,r,i,u){s&&!/^\w+:\/\/.*/.test(t)&&(t=s.resolveRelativePath(t,i)),t=n.normalizeId(t)
var f=n.getOrAddSchemaHandle(t)
return f.getUnresolvedSchema().then((function(n){if(u[t]=!0,n.errors.length){var i=r?t+"#"+r:t
o.push(a("json.schema.problemloadingref","Problems loading reference '{0}': {1}",i,n.errors[0]))}return c(e,n.schema,t,r),l(e,n.schema,t,f.dependencies)}))},l=function(e,t,r,o){if(!e||"object"!=typeof e)return Promise.resolve(null)
for(var i=[e],a=[],s=[],f=function(e){for(var n=[];e.$ref;){var a=e.$ref,f=a.split("#",2)
if(delete e.$ref,0<f[0].length)return void s.push(u(e,f[0],f[1],r,o));-1===n.indexOf(a)&&(c(e,t,r,f[1]),n.push(a))}!function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var o=n[r]
"object"==typeof o&&i.push(o)}}(e.items,e.additionalProperties,e.not,e.contains,e.propertyNames,e.if,e.then,e.else),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var o=n[r]
if("object"==typeof o)for(var a in o){var s=o[a]
"object"==typeof s&&i.push(s)}}}(e.definitions,e.properties,e.patternProperties,e.dependencies),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var o=n[r]
if(Array.isArray(o))for(var a=0,s=o;a<s.length;a++){var c=s[a]
"object"==typeof c&&i.push(c)}}}(e.anyOf,e.allOf,e.oneOf,e.items)};i.length;){var l=i.pop()
0<=a.indexOf(l)||(a.push(l),f(l))}return n.promise.all(s)}
return l(i,i,t,r).then((function(e){return new f(i,o)}))},e.prototype.getSchemaForResource=function(e,t){if(t&&t.root&&"object"===t.root.type){var r=t.root.properties.filter((function(e){return"$schema"===e.keyNode.value&&e.valueNode&&"string"===e.valueNode.type}))
if(0<r.length){var n=i.getNodeValue(r[0].valueNode)
if(n&&o.startsWith(n,".")&&this.contextService&&(n=this.contextService.resolveRelativePath(n,e)),n){var a=this.normalizeId(n)
return this.getOrAddSchemaHandle(a).getResolvedSchema()}}}for(var s=Object.create(null),c=[],u=0,f=this.filePatternAssociations;u<f.length;u++){var l=f[u]
if(l.matchesPattern(e))for(var d=0,p=l.getSchemas();d<p.length;d++){var h=p[d]
s[h]||(c.push(h),s[h]=!0)}}return 0<c.length?this.createCombinedSchema(e,c).getResolvedSchema():this.promise.resolve(null)},e.prototype.createCombinedSchema=function(e,t){if(1===t.length)return this.getOrAddSchemaHandle(t[0])
var r="schemaservice://combinedSchema/"+encodeURIComponent(e),n={allOf:t.map((function(e){return{$ref:e}}))}
return this.addSchemaHandle(r,n)},e}()
function d(e){try{var t=n.default.parse(e)
if("file"===t.scheme)return t.fsPath}catch(e){}return e}t.JSONSchemaService=l})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonValidation",["require","exports","./jsonSchemaService","vscode-languageserver-types","../jsonLanguageTypes","vscode-nls"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("./jsonSchemaService"),n=e("vscode-languageserver-types"),o=e("../jsonLanguageTypes"),i=e("vscode-nls").loadMessageBundle(),a=function(){function e(e,t){this.jsonSchemaService=e,this.promise=t,this.validationEnabled=!0}return e.prototype.configure=function(e){e&&(this.validationEnabled=e.validate,this.commentSeverity=e.allowComments?void 0:n.DiagnosticSeverity.Error)},e.prototype.doValidation=function(e,t,a,f){var l=this
if(!this.validationEnabled)return this.promise.resolve([])
var d=[],p={},h=function(e){var t=e.range.start.line+" "+e.range.start.character+" "+e.message
p[t]||(p[t]=!0,d.push(e))},m=function(r){var s=a?u(a.trailingCommas):n.DiagnosticSeverity.Error,f=a?u(a.comments):l.commentSeverity
if(r){if(r.errors.length&&t.root){var p=t.root,m="object"===p.type?p.properties[0]:null
if(m&&"$schema"===m.keyNode.value){var g=m.valueNode||m,v=n.Range.create(e.positionAt(g.offset),e.positionAt(g.offset+g.length))
h(n.Diagnostic.create(v,r.errors[0],n.DiagnosticSeverity.Warning,o.ErrorCode.SchemaResolveError))}else v=n.Range.create(e.positionAt(p.offset),e.positionAt(p.offset+1)),h(n.Diagnostic.create(v,r.errors[0],n.DiagnosticSeverity.Warning,o.ErrorCode.SchemaResolveError))}else{var y=t.validate(e,r.schema)
y&&y.forEach(h)}c(r.schema)&&(s=f=void 0)}for(var b=0,x=t.syntaxErrors;b<x.length;b++){var S=x[b]
if(S.code===o.ErrorCode.TrailingComma){if("number"!=typeof s)continue
S.severity=s}h(S)}if("number"==typeof f){var C=i("InvalidCommentToken","Comments are not permitted in JSON.")
t.comments.forEach((function(e){h(n.Diagnostic.create(e,C,f,o.ErrorCode.CommentNotPermitted))}))}return d}
if(f){var g=f.id||"schemaservice://untitled/"+s++
return this.jsonSchemaService.resolveSchemaContent(new r.UnresolvedSchema(f),g,{}).then((function(e){return m(e)}))}return this.jsonSchemaService.getSchemaForResource(e.uri,t).then((function(e){return m(e)}))},e}()
t.JSONValidation=a
var s=0
function c(e){if(e&&"object"==typeof e){if(e.allowComments)return!0
if(e.allOf)return e.allOf.some(c)}return!1}function u(e){switch(e){case"error":return n.DiagnosticSeverity.Error
case"warning":return n.DiagnosticSeverity.Warning
case"ignore":return}}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/utils/colors",["require","exports"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=48,n=57,o=65,i=97,a=102
function s(e){return e<r?0:e<=n?e-r:(e<i&&(e+=i-o),i<=e&&e<=a?e-i+10:0)}t.hexDigit=s,t.colorFromHex=function(e){if("#"!==e[0])return null
switch(e.length){case 4:return{red:17*s(e.charCodeAt(1))/255,green:17*s(e.charCodeAt(2))/255,blue:17*s(e.charCodeAt(3))/255,alpha:1}
case 5:return{red:17*s(e.charCodeAt(1))/255,green:17*s(e.charCodeAt(2))/255,blue:17*s(e.charCodeAt(3))/255,alpha:17*s(e.charCodeAt(4))/255}
case 7:return{red:(16*s(e.charCodeAt(1))+s(e.charCodeAt(2)))/255,green:(16*s(e.charCodeAt(3))+s(e.charCodeAt(4)))/255,blue:(16*s(e.charCodeAt(5))+s(e.charCodeAt(6)))/255,alpha:1}
case 9:return{red:(16*s(e.charCodeAt(1))+s(e.charCodeAt(2)))/255,green:(16*s(e.charCodeAt(3))+s(e.charCodeAt(4)))/255,blue:(16*s(e.charCodeAt(5))+s(e.charCodeAt(6)))/255,alpha:(16*s(e.charCodeAt(7))+s(e.charCodeAt(8)))/255}}return null},t.colorFrom256RGB=function(e,t,r,n){return void 0===n&&(n=1),{red:e/255,green:t/255,blue:r/255,alpha:n}}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonDocumentSymbols",["require","exports","../parser/jsonParser","../utils/strings","../utils/colors","vscode-languageserver-types"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("../parser/jsonParser"),n=e("../utils/strings"),o=e("../utils/colors"),i=e("vscode-languageserver-types"),a=function(){function e(e){this.schemaService=e}return e.prototype.findDocumentSymbols=function(e,t){var o=this,a=t.root
if(!a)return null
var c=e.uri
if(("vscode://defaultsettings/keybindings.json"===c||n.endsWith(c.toLowerCase(),"/user/keybindings.json"))&&"array"===a.type){var u=[]
return a.items.forEach((function(t){if("object"===t.type)for(var n=0,o=t.properties;n<o.length;n++){var a=o[n]
if("key"===a.keyNode.value&&a.valueNode){if(a.valueNode){var c=i.Location.create(e.uri,s(e,t))
u.push({name:r.getNodeValue(a.valueNode),kind:i.SymbolKind.Function,location:c})}return}}})),u}var f=function(t,r,n){return"array"===r.type?r.items.forEach((function(e){return f(t,e,n)})):"object"===r.type&&r.properties.forEach((function(r){var a=i.Location.create(e.uri,s(e,r)),c=r.valueNode
if(c){var u=n?n+"."+r.keyNode.value:r.keyNode.value
t.push({name:o.getKeyLabel(r),kind:o.getSymbolKind(c.type),location:a,containerName:n}),f(t,c,u)}})),t}
return f([],a,void 0)},e.prototype.findDocumentSymbols2=function(e,t){var o=this,a=t.root
if(!a)return null
var c=e.uri
if(("vscode://defaultsettings/keybindings.json"===c||n.endsWith(c.toLowerCase(),"/user/keybindings.json"))&&"array"===a.type){var u=[]
return a.items.forEach((function(t){if("object"===t.type)for(var n=0,o=t.properties;n<o.length;n++){var a=o[n]
if("key"===a.keyNode.value){if(a.valueNode){var c=s(e,t),f=s(e,a.keyNode)
u.push({name:r.getNodeValue(a.valueNode),kind:i.SymbolKind.Function,range:c,selectionRange:f})}return}}})),u}var f=function(t,r){return"array"===r.type?r.items.forEach((function(r,n){if(r){var i=s(e,r),a=i,c=String(n),u=f([],r)
t.push({name:c,kind:o.getSymbolKind(r.type),range:i,selectionRange:a,children:u})}})):"object"===r.type&&r.properties.forEach((function(r){var n=r.valueNode
if(n){var i=s(e,r),a=s(e,r.keyNode),c=f([],n)
t.push({name:o.getKeyLabel(r),kind:o.getSymbolKind(n.type),range:i,selectionRange:a,children:c})}})),t}
return f([],a)},e.prototype.getSymbolKind=function(e){switch(e){case"object":return i.SymbolKind.Module
case"string":return i.SymbolKind.String
case"number":return i.SymbolKind.Number
case"array":return i.SymbolKind.Array
case"boolean":return i.SymbolKind.Boolean
default:return i.SymbolKind.Variable}},e.prototype.getKeyLabel=function(e){var t=e.keyNode.value
return t&&(t=t.replace(/[\n]/g,"↵")),t&&t.trim()?t:'"'+t+'"'},e.prototype.findDocumentColors=function(e,t){return this.schemaService.getSchemaForResource(e.uri,t).then((function(n){var i=[]
if(n)for(var a={},c=0,u=t.getMatchingSchemas(n.schema);c<u.length;c++){var f=u[c]
if(!f.inverted&&f.schema&&("color"===f.schema.format||"color-hex"===f.schema.format)&&f.node&&"string"===f.node.type){var l=String(f.node.offset)
if(!a[l]){var d=o.colorFromHex(r.getNodeValue(f.node))
if(d){var p=s(e,f.node)
i.push({color:d,range:p})}a[l]=!0}}}return i}))},e.prototype.getColorPresentations=function(e,t,r,n){var o,a=[],s=Math.round(255*r.red),c=Math.round(255*r.green),u=Math.round(255*r.blue)
function f(e){var t=e.toString(16)
return 2!==t.length?"0"+t:t}return o=1===r.alpha?"#"+f(s)+f(c)+f(u):"#"+f(s)+f(c)+f(u)+f(Math.round(255*r.alpha)),a.push({label:o,textEdit:i.TextEdit.replace(n,JSON.stringify(o))}),a},e}()
function s(e,t){return i.Range.create(e.positionAt(t.offset),e.positionAt(t.offset+t.length))}t.JSONDocumentSymbols=a})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/configuration",["require","exports","vscode-nls"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("vscode-nls").loadMessageBundle()
t.schemaContributions={schemaAssociations:{},schemas:{"http://json-schema.org/draft-04/schema#":{title:r("schema.json","Describes a JSON file using a schema. See json-schema.org for more info."),$schema:"http://json-schema.org/draft-04/schema#",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{default:0}]},simpleTypes:{type:"string",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0}},type:"object",properties:{id:{type:"string",format:"uri"},$schema:{type:"string",format:"uri"},title:{type:"string"},description:{type:"string"},default:{},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"boolean",default:!1},minimum:{type:"number"},exclusiveMinimum:{type:"boolean",default:!1},maxLength:{allOf:[{$ref:"#/definitions/positiveInteger"}]},minLength:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}]},pattern:{type:"string",format:"regex"},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{}},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{}},maxItems:{allOf:[{$ref:"#/definitions/positiveInteger"}]},minItems:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}]},uniqueItems:{type:"boolean",default:!1},maxProperties:{allOf:[{$ref:"#/definitions/positiveInteger"}]},minProperties:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}]},required:{allOf:[{$ref:"#/definitions/stringArray"}]},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{}},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},enum:{type:"array",minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{anyOf:[{type:"string",enum:["date-time","uri","email","hostname","ipv4","ipv6","regex"]},{type:"string"}]},allOf:{allOf:[{$ref:"#/definitions/schemaArray"}]},anyOf:{allOf:[{$ref:"#/definitions/schemaArray"}]},oneOf:{allOf:[{$ref:"#/definitions/schemaArray"}]},not:{allOf:[{$ref:"#"}]}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"]},default:{}},"http://json-schema.org/draft-07/schema#":{title:r("schema.json","Describes a JSON file using a schema. See json-schema.org for more info."),definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0}}}
var n={id:r("schema.json.id","A unique identifier for the schema."),$schema:r("schema.json.$schema","The schema to verify this document against."),title:r("schema.json.title","A descriptive title of the element."),description:r("schema.json.description","A long description of the element. Used in hover menus and suggestions."),default:r("schema.json.default","A default value. Used by suggestions."),multipleOf:r("schema.json.multipleOf","A number that should cleanly divide the current value (i.e. have no remainder)."),maximum:r("schema.json.maximum","The maximum numerical value, inclusive by default."),exclusiveMaximum:r("schema.json.exclusiveMaximum","Makes the maximum property exclusive."),minimum:r("schema.json.minimum","The minimum numerical value, inclusive by default."),exclusiveMinimum:r("schema.json.exclusiveMininum","Makes the minimum property exclusive."),maxLength:r("schema.json.maxLength","The maximum length of a string."),minLength:r("schema.json.minLength","The minimum length of a string."),pattern:r("schema.json.pattern","A regular expression to match the string against. It is not implicitly anchored."),additionalItems:r("schema.json.additionalItems","For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."),items:r("schema.json.items","For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."),maxItems:r("schema.json.maxItems","The maximum number of items that can be inside an array. Inclusive."),minItems:r("schema.json.minItems","The minimum number of items that can be inside an array. Inclusive."),uniqueItems:r("schema.json.uniqueItems","If all of the items in the array must be unique. Defaults to false."),maxProperties:r("schema.json.maxProperties","The maximum number of properties an object can have. Inclusive."),minProperties:r("schema.json.minProperties","The minimum number of properties an object can have. Inclusive."),required:r("schema.json.required","An array of strings that lists the names of all properties required on this object."),additionalProperties:r("schema.json.additionalProperties","Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."),definitions:r("schema.json.definitions","Not used for validation. Place subschemas here that you wish to reference inline with $ref."),properties:r("schema.json.properties","A map of property names to schemas for each property."),patternProperties:r("schema.json.patternProperties","A map of regular expressions on property names to schemas for matching properties."),dependencies:r("schema.json.dependencies","A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."),enum:r("schema.json.enum","The set of literal values that are valid."),type:r("schema.json.type","Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."),format:r("schema.json.format","Describes the format expected for the value."),allOf:r("schema.json.allOf","An array of schemas, all of which must match."),anyOf:r("schema.json.anyOf","An array of schemas, where at least one must match."),oneOf:r("schema.json.oneOf","An array of schemas, exactly one of which must match."),not:r("schema.json.not","A schema which must not match."),$id:r("schema.json.$id","A unique identifier for the schema."),$ref:r("schema.json.$ref","Reference a definition hosted on any location."),$comment:r("schema.json.$comment","Comments from schema authors to readers or maintainers of the schema."),readOnly:r("schema.json.readOnly","Indicates that the value of the instance is managed exclusively by the owning authority."),examples:r("schema.json.examples","Sample JSON values associated with a particular schema, for the purpose of illustrating usage."),contains:r("schema.json.contains",'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'),propertyNames:r("schema.json.propertyNames","If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."),const:r("schema.json.const","An instance validates successfully against this keyword if its value is equal to the value of the keyword."),contentMediaType:r("schema.json.contentMediaType","Describes the media type of a string property."),contentEncoding:r("schema.json.contentEncoding","Describes the content encoding of a string property."),if:r("schema.json.if",'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'),then:r("schema.json.then",'The "if" subschema is used for validation when the "if" subschema succeeds.'),else:r("schema.json.else",'The "else" subschema is used for validation when the "if" subschema fails.')}
for(var o in t.schemaContributions.schemas){var i=t.schemaContributions.schemas[o]
for(var a in i.properties){var s=i.properties[a]
!0===s&&(s=i.properties[a]={})
var c=n[a]
c?s.description=c:console.log(a+": localize('schema.json."+a+'\', "")')}}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonFolding",["require","exports","vscode-languageserver-types","jsonc-parser","../jsonLanguageTypes"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("vscode-languageserver-types"),n=e("jsonc-parser"),o=e("../jsonLanguageTypes")
t.getFoldingRanges=function(e,t){var i=[],a=[],s=[],c=-1,u=n.createScanner(e.getText(),!1),f=u.scan()
function l(e){i.push(e),a.push(s.length)}for(;17!==f;){switch(f){case 1:case 3:var d={startLine:m=e.positionAt(u.getTokenOffset()).line,endLine:m,kind:1===f?"object":"array"}
s.push(d)
break
case 2:case 4:var p=2===f?"object":"array"
if(0<s.length&&s[s.length-1].kind===p){d=s.pop()
var h=e.positionAt(u.getTokenOffset()).line
d&&h>d.startLine+1&&c!==d.startLine&&(d.endLine=h-1,l(d),c=d.startLine)}break
case 13:var m=e.positionAt(u.getTokenOffset()).line,g=e.positionAt(u.getTokenOffset()+u.getTokenLength()).line
1===u.getTokenError()&&m+1<e.lineCount?u.setPosition(e.offsetAt(r.Position.create(m+1,0))):m<g&&(l({startLine:m,endLine:g,kind:o.FoldingRangeKind.Comment}),c=m)
break
case 12:var v=e.getText().substr(u.getTokenOffset(),u.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/)
if(v)if(h=e.positionAt(u.getTokenOffset()).line,v[1])d={startLine:h,endLine:h,kind:o.FoldingRangeKind.Region},s.push(d)
else{for(var y=s.length-1;0<=y&&s[y].kind!==o.FoldingRangeKind.Region;)y--
0<=y&&(d=s[y],s.length=y,h>d.startLine&&c!==d.startLine&&(d.endLine=h,l(d),c=d.startLine))}}f=u.scan()}var b=t&&t.rangeLimit
if("number"!=typeof b||i.length<=b)return i
for(var x=[],S=0,C=a;S<C.length;S++)(A=C[S])<30&&(x[A]=(x[A]||0)+1)
var j=0,k=0
for(y=0;y<x.length;y++){var T=x[y]
if(T){if(b<T+j){k=y
break}j+=T}}var O=[]
for(y=0;y<i.length;y++){var A
"number"==typeof(A=a[y])&&(A<k||A===k&&j++<b)&&O.push(i[y])}return O}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonSelectionRanges",["require","exports","vscode-languageserver-types","jsonc-parser","../jsonLanguageTypes"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("vscode-languageserver-types"),n=e("jsonc-parser"),o=e("../jsonLanguageTypes")
t.getSelectionRanges=function(e,t,i){function a(t,n){return{range:r.Range.create(e.positionAt(t),e.positionAt(n)),kind:o.SelectionRangeKind.Declaration}}var s=n.createScanner(e.getText(),!0)
return t.map((function(t){var r,n=e.offsetAt(t),o=i.getNodeFromOffset(n,!0)
if(!o)return[]
for(var c=[];o;){switch(o.type){case"string":case"object":case"array":var u=o.offset+1,f=o.offset+o.length-1
u<f&&u<=n&&n<=f&&c.push(a(u,f)),c.push(a(o.offset,o.offset+o.length))
break
case"number":case"boolean":case"null":case"property":c.push(a(o.offset,o.offset+o.length))}if("property"===o.type||o.parent&&"array"===o.parent.type){var l=(r=o.offset+o.length,5,s.setPosition(r),5===s.scan()?s.getTokenOffset()+s.getTokenLength():-1);-1!==l&&c.push(a(o.offset,l))}o=o.parent}return c}))}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/jsonLanguageService",["require","exports","vscode-languageserver-types","./services/jsonCompletion","./services/jsonHover","./services/jsonValidation","./services/jsonDocumentSymbols","./parser/jsonParser","./services/configuration","./services/jsonSchemaService","./services/jsonFolding","./services/jsonSelectionRanges","jsonc-parser","./jsonLanguageTypes"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=e("vscode-languageserver-types")
t.TextDocument=r.TextDocument,t.Position=r.Position,t.CompletionItem=r.CompletionItem,t.CompletionList=r.CompletionList,t.Hover=r.Hover,t.Range=r.Range,t.SymbolInformation=r.SymbolInformation,t.Diagnostic=r.Diagnostic,t.TextEdit=r.TextEdit,t.FormattingOptions=r.FormattingOptions,t.MarkedString=r.MarkedString
var n=e("./services/jsonCompletion"),o=e("./services/jsonHover"),i=e("./services/jsonValidation"),a=e("./services/jsonDocumentSymbols"),s=e("./parser/jsonParser"),c=e("./services/configuration"),u=e("./services/jsonSchemaService"),f=e("./services/jsonFolding"),l=e("./services/jsonSelectionRanges"),d=e("jsonc-parser")
!function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(e("./jsonLanguageTypes")),t.getLanguageService=function(e){var t=e.promiseConstructor||Promise,p=new u.JSONSchemaService(e.schemaRequestService,e.workspaceContext,t)
p.setSchemaContributions(c.schemaContributions)
var h=new n.JSONCompletion(p,e.contributions,t,e.clientCapabilities),m=new o.JSONHover(p,e.contributions,t),g=new a.JSONDocumentSymbols(p),v=new i.JSONValidation(p,t)
return{configure:function(e){p.clearExternalSchemas(),e.schemas&&e.schemas.forEach((function(e){p.registerExternalSchema(e.uri,e.fileMatch,e.schema)})),v.configure(e)},resetSchema:function(e){return p.onResourceChange(e)},doValidation:v.doValidation.bind(v),parseJSONDocument:function(e){return s.parse(e,{collectComments:!0})},newJSONDocument:function(e,t){return s.newJSONDocument(e,t)},doResolve:h.doResolve.bind(h),doComplete:h.doComplete.bind(h),findDocumentSymbols:g.findDocumentSymbols.bind(g),findDocumentSymbols2:g.findDocumentSymbols2.bind(g),findColorSymbols:function(e,t){return g.findDocumentColors(e,t).then((function(e){return e.map((function(e){return e.range}))}))},findDocumentColors:g.findDocumentColors.bind(g),getColorPresentations:g.getColorPresentations.bind(g),doHover:m.doHover.bind(m),getFoldingRanges:f.getFoldingRanges,getSelectionRanges:l.getSelectionRanges,format:function(e,t,n){var o=void 0
if(t){var i=e.offsetAt(t.start)
o={offset:i,length:e.offsetAt(t.end)-i}}var a={tabSize:n?n.tabSize:4,insertSpaces:!n||n.insertSpaces,eol:"\n"}
return d.format(e.getText(),o,a).map((function(t){return r.TextEdit.replace(r.Range.create(e.positionAt(t.offset),e.positionAt(t.offset+t.length)),t.content)}))}}}})),define("vscode-json-languageservice",["vscode-json-languageservice/jsonLanguageService"],(function(e){return e})),define("vs/language/json/jsonWorker",["require","exports","vscode-json-languageservice","vscode-languageserver-types"],(function(e,t,r,n){"use strict"
var o
Object.defineProperty(t,"__esModule",{value:!0}),"undefined"!=typeof fetch&&(o=function(e){return fetch(e).then((function(e){return e.text()}))})
var i=function(){function e(e){this.wrapped=new Promise(e)}return e.prototype.then=function(e,t){return this.wrapped.then(e,t)},e.prototype.getWrapped=function(){return this.wrapped},e.resolve=function(e){return Promise.resolve(e)},e.reject=function(e){return Promise.reject(e)},e.all=function(e){return Promise.all(e)},e}(),a=function(){function e(e,t){this._ctx=e,this._languageSettings=t.languageSettings,this._languageId=t.languageId,this._languageService=r.getLanguageService({schemaRequestService:t.enableSchemaRequest&&o,promiseConstructor:i}),this._languageService.configure(this._languageSettings)}return e.prototype.doValidation=function(e){var t=this._getTextDocument(e)
if(t){var r=this._languageService.parseJSONDocument(t)
return this._languageService.doValidation(t,r)}return Promise.resolve([])},e.prototype.doComplete=function(e,t){var r=this._getTextDocument(e),n=this._languageService.parseJSONDocument(r)
return this._languageService.doComplete(r,t,n)},e.prototype.doResolve=function(e){return this._languageService.doResolve(e)},e.prototype.doHover=function(e,t){var r=this._getTextDocument(e),n=this._languageService.parseJSONDocument(r)
return this._languageService.doHover(r,t,n)},e.prototype.format=function(e,t,r){var n=this._getTextDocument(e),o=this._languageService.format(n,t,r)
return Promise.resolve(o)},e.prototype.resetSchema=function(e){return Promise.resolve(this._languageService.resetSchema(e))},e.prototype.findDocumentSymbols=function(e){var t=this._getTextDocument(e),r=this._languageService.parseJSONDocument(t),n=this._languageService.findDocumentSymbols(t,r)
return Promise.resolve(n)},e.prototype.findDocumentColors=function(e){var t=this._getTextDocument(e),r=this._languageService.parseJSONDocument(t),n=this._languageService.findDocumentColors(t,r)
return Promise.resolve(n)},e.prototype.getColorPresentations=function(e,t,r){var n=this._getTextDocument(e),o=this._languageService.parseJSONDocument(n),i=this._languageService.getColorPresentations(n,o,t,r)
return Promise.resolve(i)},e.prototype.provideFoldingRanges=function(e,t){var r=this._getTextDocument(e),n=this._languageService.getFoldingRanges(r,t)
return Promise.resolve(n)},e.prototype._getTextDocument=function(e){for(var t=0,r=this._ctx.getMirrorModels();t<r.length;t++){var o=r[t]
if(o.uri.toString()===e)return n.TextDocument.create(e,this._languageId,o.version,o.getValue())}return null},e}()
t.JSONWorker=a,t.create=function(e,t){return new a(e,t)}}))
