/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-css version: 2.5.0(19554e0f06b7e77411e8580745815248e3a06b58)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/css/workerManager",["require","exports"],(function(e,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var t=function(){function e(e){var n=this
this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return n._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&12e4<Date.now()-this._lastUsedTime&&this._stopWorker()},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return this._getClient().then((function(n){e=n})).then((function(e){return n._worker.withSyncedResources(t)})).then((function(n){return e}))},e}()
n.WorkerManager=t})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports)
void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}((function(e,n){"use strict"
var t,r,i,o,a,u,s,c,d,l,g,f,m,p,h,v,y,b,C,k,_,x,w,I,S,D,E,K,T,R,M
Object.defineProperty(n,"__esModule",{value:!0}),(r=t=n.Position||(n.Position={})).create=function(e,n){return{line:e,character:n}},r.is=function(e){var n=e
return ae.objectLiteral(n)&&ae.number(n.line)&&ae.number(n.character)},(o=i=n.Range||(n.Range={})).create=function(e,n,r,i){if(ae.number(e)&&ae.number(n)&&ae.number(r)&&ae.number(i))return{start:t.create(e,n),end:t.create(r,i)}
if(t.is(e)&&t.is(n))return{start:e,end:n}
throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+r+", "+i+"]")},o.is=function(e){var n=e
return ae.objectLiteral(n)&&t.is(n.start)&&t.is(n.end)},(u=a=n.Location||(n.Location={})).create=function(e,n){return{uri:e,range:n}},u.is=function(e){var n=e
return ae.defined(n)&&i.is(n.range)&&(ae.string(n.uri)||ae.undefined(n.uri))},(s=n.LocationLink||(n.LocationLink={})).create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},s.is=function(e){var n=e
return ae.defined(n)&&i.is(n.targetRange)&&ae.string(n.targetUri)&&(i.is(n.targetSelectionRange)||ae.undefined(n.targetSelectionRange))&&(i.is(n.originSelectionRange)||ae.undefined(n.originSelectionRange))},(d=c=n.Color||(n.Color={})).create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},d.is=function(e){var n=e
return ae.number(n.red)&&ae.number(n.green)&&ae.number(n.blue)&&ae.number(n.alpha)},(l=n.ColorInformation||(n.ColorInformation={})).create=function(e,n){return{range:e,color:n}},l.is=function(e){var n=e
return i.is(n.range)&&c.is(n.color)},(g=n.ColorPresentation||(n.ColorPresentation={})).create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},g.is=function(e){var n=e
return ae.string(n.label)&&(ae.undefined(n.textEdit)||_.is(n))&&(ae.undefined(n.additionalTextEdits)||ae.typedArray(n.additionalTextEdits,_.is))},(f=n.FoldingRangeKind||(n.FoldingRangeKind={})).Comment="comment",f.Imports="imports",f.Region="region",(m=n.FoldingRange||(n.FoldingRange={})).create=function(e,n,t,r,i){var o={startLine:e,endLine:n}
return ae.defined(t)&&(o.startCharacter=t),ae.defined(r)&&(o.endCharacter=r),ae.defined(i)&&(o.kind=i),o},m.is=function(e){var n=e
return ae.number(n.startLine)&&ae.number(n.startLine)&&(ae.undefined(n.startCharacter)||ae.number(n.startCharacter))&&(ae.undefined(n.endCharacter)||ae.number(n.endCharacter))&&(ae.undefined(n.kind)||ae.string(n.kind))},(h=p=n.DiagnosticRelatedInformation||(n.DiagnosticRelatedInformation={})).create=function(e,n){return{location:e,message:n}},h.is=function(e){var n=e
return ae.defined(n)&&a.is(n.location)&&ae.string(n.message)},(v=n.DiagnosticSeverity||(n.DiagnosticSeverity={})).Error=1,v.Warning=2,v.Information=3,v.Hint=4,(b=y=n.Diagnostic||(n.Diagnostic={})).create=function(e,n,t,r,i,o){var a={range:e,message:n}
return ae.defined(t)&&(a.severity=t),ae.defined(r)&&(a.code=r),ae.defined(i)&&(a.source=i),ae.defined(o)&&(a.relatedInformation=o),a},b.is=function(e){var n=e
return ae.defined(n)&&i.is(n.range)&&ae.string(n.message)&&(ae.number(n.severity)||ae.undefined(n.severity))&&(ae.number(n.code)||ae.string(n.code)||ae.undefined(n.code))&&(ae.string(n.source)||ae.undefined(n.source))&&(ae.undefined(n.relatedInformation)||ae.typedArray(n.relatedInformation,p.is))},(k=C=n.Command||(n.Command={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r]
var i={title:e,command:n}
return ae.defined(t)&&0<t.length&&(i.arguments=t),i},k.is=function(e){var n=e
return ae.defined(n)&&ae.string(n.title)&&ae.string(n.command)},(x=_=n.TextEdit||(n.TextEdit={})).replace=function(e,n){return{range:e,newText:n}},x.insert=function(e,n){return{range:{start:e,end:e},newText:n}},x.del=function(e){return{range:e,newText:""}},x.is=function(e){var n=e
return ae.objectLiteral(n)&&ae.string(n.newText)&&i.is(n.range)},(I=w=n.TextDocumentEdit||(n.TextDocumentEdit={})).create=function(e,n){return{textDocument:e,edits:n}},I.is=function(e){var n=e
return ae.defined(n)&&F.is(n.textDocument)&&Array.isArray(n.edits)},(D=S=n.CreateFile||(n.CreateFile={})).create=function(e,n){var t={kind:"create",uri:e}
return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(t.options=n),t},D.is=function(e){var n=e
return n&&"create"===n.kind&&ae.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||ae.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||ae.boolean(n.options.ignoreIfExists)))},(K=E=n.RenameFile||(n.RenameFile={})).create=function(e,n,t){var r={kind:"rename",oldUri:e,newUri:n}
return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),r},K.is=function(e){var n=e
return n&&"rename"===n.kind&&ae.string(n.oldUri)&&ae.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||ae.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||ae.boolean(n.options.ignoreIfExists)))},(R=T=n.DeleteFile||(n.DeleteFile={})).create=function(e,n){var t={kind:"delete",uri:e}
return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(t.options=n),t},R.is=function(e){var n=e
return n&&"delete"===n.kind&&ae.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||ae.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||ae.boolean(n.options.ignoreIfNotExists)))},(M=n.WorkspaceEdit||(n.WorkspaceEdit={})).is=function(e){var n=e
return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every((function(e){return ae.string(e.kind)?S.is(e)||E.is(e)||T.is(e):w.is(e)})))}
var A,F,P,L,O,j,H,W,N,V,U,q,z,B,$=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(_.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(_.replace(e,n))},e.prototype.delete=function(e){this.edits.push(_.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),Q=function(){function e(e){var n=this
this._textEditChanges=Object.create(null),e&&((this._workspaceEdit=e).documentChanges?e.documentChanges.forEach((function(e){if(w.is(e)){var t=new $(e.edits)
n._textEditChanges[e.textDocument.uri]=t}})):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new $(e.changes[t])
n._textEditChanges[t]=r})))}return Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(F.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")
var n=e
if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]}
this._workspaceEdit.documentChanges.push(t),r=new $(i),this._textEditChanges[n.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.")
var r
if(!(r=this._textEditChanges[e])){var i=[]
this._workspaceEdit.changes[e]=i,r=new $(i),this._textEditChanges[e]=r}return r},e.prototype.createFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(S.create(e,n))},e.prototype.renameFile=function(e,n,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(E.create(e,n,t))},e.prototype.deleteFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(T.create(e,n))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")},e}()
n.WorkspaceChange=Q,(A=n.TextDocumentIdentifier||(n.TextDocumentIdentifier={})).create=function(e){return{uri:e}},A.is=function(e){var n=e
return ae.defined(n)&&ae.string(n.uri)},(P=F=n.VersionedTextDocumentIdentifier||(n.VersionedTextDocumentIdentifier={})).create=function(e,n){return{uri:e,version:n}},P.is=function(e){var n=e
return ae.defined(n)&&ae.string(n.uri)&&(null===n.version||ae.number(n.version))},(L=n.TextDocumentItem||(n.TextDocumentItem={})).create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},L.is=function(e){var n=e
return ae.defined(n)&&ae.string(n.uri)&&ae.string(n.languageId)&&ae.number(n.version)&&ae.string(n.text)},(j=O=n.MarkupKind||(n.MarkupKind={})).PlainText="plaintext",j.Markdown="markdown",(H=O=n.MarkupKind||(n.MarkupKind={})).is=function(e){var n=e
return n===H.PlainText||n===H.Markdown},(W=n.MarkupContent||(n.MarkupContent={})).is=function(e){var n=e
return ae.objectLiteral(e)&&O.is(n.kind)&&ae.string(n.value)},(N=n.CompletionItemKind||(n.CompletionItemKind={})).Text=1,N.Method=2,N.Function=3,N.Constructor=4,N.Field=5,N.Variable=6,N.Class=7,N.Interface=8,N.Module=9,N.Property=10,N.Unit=11,N.Value=12,N.Enum=13,N.Keyword=14,N.Snippet=15,N.Color=16,N.File=17,N.Reference=18,N.Folder=19,N.EnumMember=20,N.Constant=21,N.Struct=22,N.Event=23,N.Operator=24,N.TypeParameter=25,(V=n.InsertTextFormat||(n.InsertTextFormat={})).PlainText=1,V.Snippet=2,(n.CompletionItem||(n.CompletionItem={})).create=function(e){return{label:e}},(n.CompletionList||(n.CompletionList={})).create=function(e,n){return{items:e||[],isIncomplete:!!n}},(q=U=n.MarkedString||(n.MarkedString={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},q.is=function(e){var n=e
return ae.string(n)||ae.objectLiteral(n)&&ae.string(n.language)&&ae.string(n.value)},(n.Hover||(n.Hover={})).is=function(e){var n=e
return!!n&&ae.objectLiteral(n)&&(W.is(n.contents)||U.is(n.contents)||ae.typedArray(n.contents,U.is))&&(void 0===e.range||i.is(e.range))},(n.ParameterInformation||(n.ParameterInformation={})).create=function(e,n){return n?{label:e,documentation:n}:{label:e}},(n.SignatureInformation||(n.SignatureInformation={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r]
var i={label:e}
return ae.defined(n)&&(i.documentation=n),ae.defined(t)?i.parameters=t:i.parameters=[],i},(z=n.DocumentHighlightKind||(n.DocumentHighlightKind={})).Text=1,z.Read=2,z.Write=3,(n.DocumentHighlight||(n.DocumentHighlight={})).create=function(e,n){var t={range:e}
return ae.number(n)&&(t.kind=n),t},(B=n.SymbolKind||(n.SymbolKind={})).File=1,B.Module=2,B.Namespace=3,B.Package=4,B.Class=5,B.Method=6,B.Property=7,B.Field=8,B.Constructor=9,B.Enum=10,B.Interface=11,B.Function=12,B.Variable=13,B.Constant=14,B.String=15,B.Number=16,B.Boolean=17,B.Array=18,B.Object=19,B.Key=20,B.Null=21,B.EnumMember=22,B.Struct=23,B.Event=24,B.Operator=25,B.TypeParameter=26,(n.SymbolInformation||(n.SymbolInformation={})).create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}}
return i&&(o.containerName=i),o}
var G,J,X,Y,Z,ee,ne=function(){}
n.DocumentSymbol=ne,(G=ne=n.DocumentSymbol||(n.DocumentSymbol={})).create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i}
return void 0!==o&&(a.children=o),a},G.is=function(e){var n=e
return n&&ae.string(n.name)&&ae.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.detail||ae.string(n.detail))&&(void 0===n.deprecated||ae.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))},n.DocumentSymbol=ne,(J=n.CodeActionKind||(n.CodeActionKind={})).QuickFix="quickfix",J.Refactor="refactor",J.RefactorExtract="refactor.extract",J.RefactorInline="refactor.inline",J.RefactorRewrite="refactor.rewrite",J.Source="source",J.SourceOrganizeImports="source.organizeImports",(X=n.CodeActionContext||(n.CodeActionContext={})).create=function(e,n){var t={diagnostics:e}
return null!=n&&(t.only=n),t},X.is=function(e){var n=e
return ae.defined(n)&&ae.typedArray(n.diagnostics,y.is)&&(void 0===n.only||ae.typedArray(n.only,ae.string))},(Y=n.CodeAction||(n.CodeAction={})).create=function(e,n,t){var r={title:e}
return C.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r},Y.is=function(e){var n=e
return n&&ae.string(n.title)&&(void 0===n.diagnostics||ae.typedArray(n.diagnostics,y.is))&&(void 0===n.kind||ae.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||C.is(n.command))&&(void 0===n.edit||M.is(n.edit))},(Z=n.CodeLens||(n.CodeLens={})).create=function(e,n){var t={range:e}
return ae.defined(n)&&(t.data=n),t},Z.is=function(e){var n=e
return ae.defined(n)&&i.is(n.range)&&(ae.undefined(n.command)||C.is(n.command))},(ee=n.FormattingOptions||(n.FormattingOptions={})).create=function(e,n){return{tabSize:e,insertSpaces:n}},ee.is=function(e){var n=e
return ae.defined(n)&&ae.number(n.tabSize)&&ae.boolean(n.insertSpaces)}
var te,re,ie,oe=function(){}
n.DocumentLink=oe,(te=oe=n.DocumentLink||(n.DocumentLink={})).create=function(e,n,t){return{range:e,target:n,data:t}},te.is=function(e){var n=e
return ae.defined(n)&&i.is(n.range)&&(ae.undefined(n.target)||ae.string(n.target))},n.DocumentLink=oe,n.EOL=["\n","\r\n","\r"],(re=n.TextDocument||(n.TextDocument={})).create=function(e,n,t,r){return new ce(e,n,t,r)},re.is=function(e){var n=e
return!!(ae.defined(n)&&ae.string(n.uri)&&(ae.undefined(n.languageId)||ae.string(n.languageId))&&ae.number(n.lineCount)&&ae.func(n.getText)&&ae.func(n.positionAt)&&ae.func(n.offsetAt))},re.applyEdits=function(e,n){for(var t=e.getText(),r=function e(n,t){if(n.length<=1)return n
var r=n.length/2|0,i=n.slice(0,r),o=n.slice(r)
e(i,t),e(o,t)
for(var a=0,u=0,s=0;a<i.length&&u<o.length;){var c=t(i[a],o[u])
n[s++]=c<=0?i[a++]:o[u++]}for(;a<i.length;)n[s++]=i[a++]
for(;u<o.length;)n[s++]=o[u++]
return n}(n,(function(e,n){var t=e.range.start.line-n.range.start.line
return 0===t?e.range.start.character-n.range.start.character:t})),i=t.length,o=r.length-1;0<=o;o--){var a=r[o],u=e.offsetAt(a.range.start),s=e.offsetAt(a.range.end)
if(!(s<=i))throw new Error("Overlapping edit")
t=t.substring(0,u)+a.newText+t.substring(s,t.length),i=u}return t},(ie=n.TextDocumentSaveReason||(n.TextDocumentSaveReason={})).Manual=1,ie.AfterDelay=2,ie.FocusOut=3
var ae,ue,se,ce=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end)
return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1)
var i=n.charAt(r)
t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&0<n.length&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0)
var n=this.getLineOffsets(),r=0,i=n.length
if(0===i)return t.create(0,e)
for(;r<i;){var o=Math.floor((r+i)/2)
n[o]>e?i=o:r=o+1}var a=r-1
return t.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets()
if(e.line>=n.length)return this._content.length
if(e.line<0)return 0
var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length
return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}()
ue=ae||(ae={}),se=Object.prototype.toString,ue.defined=function(e){return void 0!==e},ue.undefined=function(e){return void 0===e},ue.boolean=function(e){return!0===e||!1===e},ue.string=function(e){return"[object String]"===se.call(e)},ue.number=function(e){return"[object Number]"===se.call(e)},ue.func=function(e){return"[object Function]"===se.call(e)},ue.objectLiteral=function(e){return null!==e&&"object"==typeof e},ue.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}})),define("vscode-languageserver-types",["vscode-languageserver-types/main"],(function(e){return e})),define("vs/language/css/languageFeatures",["require","exports","vscode-languageserver-types"],(function(e,n,t){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r=monaco.Uri,i=monaco.Range,o=function(){function e(e,n,t){var r=this
this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null)
var i=function(e){var n,t=e.getModeId()
t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(n),n=setTimeout((function(){return r._doValidate(e.uri,t)}),500)})),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[])
var n=e.uri.toString(),t=r._listener[n]
t&&(t.dispose(),delete r._listener[n])}
this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(o)),this._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){o(e.model),i(e.model)}))),t.onDidChange((function(e){monaco.editor.getModels().forEach((function(e){e.getModeId()===r._languageId&&(o(e),i(e))}))})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(r){var i=r.map((function(e){return r="number"==typeof(n=e).code?String(n.code):n.code,{severity:function(e){switch(e){case t.DiagnosticSeverity.Error:return monaco.MarkerSeverity.Error
case t.DiagnosticSeverity.Warning:return monaco.MarkerSeverity.Warning
case t.DiagnosticSeverity.Information:return monaco.MarkerSeverity.Info
case t.DiagnosticSeverity.Hint:return monaco.MarkerSeverity.Hint
default:return monaco.MarkerSeverity.Info}}(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:r,source:n.source}
var n,r})),o=monaco.editor.getModel(e)
o.getModeId()===n&&monaco.editor.setModelMarkers(o,n,i)})).then(void 0,(function(e){console.error(e)}))},e}()
function a(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function u(e){if(e)return new monaco.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function s(e){if(e)return{range:u(e.range),text:e.newText}}n.DiagnosticsAdapter=o
var c=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,r,o){var c=e.uri
return this._worker(c).then((function(e){return e.doComplete(c.toString(),a(n))})).then((function(r){if(r){var o=e.getWordUntilPosition(n),a=new i(n.lineNumber,o.startColumn,n.lineNumber,o.endColumn),c=r.items.map((function(e){var n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:a,kind:function(e){var n=monaco.languages.CompletionItemKind
switch(e){case t.CompletionItemKind.Text:return n.Text
case t.CompletionItemKind.Method:return n.Method
case t.CompletionItemKind.Function:return n.Function
case t.CompletionItemKind.Constructor:return n.Constructor
case t.CompletionItemKind.Field:return n.Field
case t.CompletionItemKind.Variable:return n.Variable
case t.CompletionItemKind.Class:return n.Class
case t.CompletionItemKind.Interface:return n.Interface
case t.CompletionItemKind.Module:return n.Module
case t.CompletionItemKind.Property:return n.Property
case t.CompletionItemKind.Unit:return n.Unit
case t.CompletionItemKind.Value:return n.Value
case t.CompletionItemKind.Enum:return n.Enum
case t.CompletionItemKind.Keyword:return n.Keyword
case t.CompletionItemKind.Snippet:return n.Snippet
case t.CompletionItemKind.Color:return n.Color
case t.CompletionItemKind.File:return n.File
case t.CompletionItemKind.Reference:return n.Reference}return n.Property}(e.kind)}
return e.textEdit&&(n.range=u(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(s)),e.insertTextFormat===t.InsertTextFormat.Snippet&&(n.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),n}))
return{isIncomplete:r.isIncomplete,suggestions:c}}}))},e}()
function d(e){return"string"==typeof e?{value:e}:(n=e)&&"object"==typeof n&&"string"==typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}
var n}n.CompletionAdapter=c
var l=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri
return this._worker(r).then((function(e){return e.doHover(r.toString(),a(n))})).then((function(e){if(e)return{range:u(e.range),contents:function(e){if(e)return Array.isArray(e)?e.map(d):[d(e)]}(e.contents)}}))},e}()
n.HoverAdapter=l
var g=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,r){var i=e.uri
return this._worker(i).then((function(e){return e.findDocumentHighlights(i.toString(),a(n))})).then((function(e){if(e)return e.map((function(e){return{range:u(e.range),kind:function(e){switch(e){case t.DocumentHighlightKind.Read:return monaco.languages.DocumentHighlightKind.Read
case t.DocumentHighlightKind.Write:return monaco.languages.DocumentHighlightKind.Write
case t.DocumentHighlightKind.Text:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}(e.kind)}}))}))},e}()
function f(e){return{uri:r.parse(e.uri),range:u(e.range)}}n.DocumentHighlightAdapter=g
var m=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri
return this._worker(r).then((function(e){return e.findDefinition(r.toString(),a(n))})).then((function(e){if(e)return[f(e)]}))},e}()
n.DefinitionAdapter=m
var p=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var i=e.uri
return this._worker(i).then((function(e){return e.findReferences(i.toString(),a(n))})).then((function(e){if(e)return e.map(f)}))},e}()
n.ReferenceAdapter=p
var h=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,i){var o=e.uri
return this._worker(o).then((function(e){return e.doRename(o.toString(),a(n),t)})).then((function(e){return function(e){if(e&&e.changes){var n=[]
for(var t in e.changes){for(var i=[],o=0,a=e.changes[t];o<a.length;o++){var s=a[o]
i.push({range:u(s.range),text:s.newText})}n.push({resource:r.parse(t),edits:i})}return{edits:n}}}(e)}))},e}()
n.RenameAdapter=h
var v=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var r=e.uri
return this._worker(r).then((function(e){return e.findDocumentSymbols(r.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:function(e){var n=monaco.languages.SymbolKind
switch(e){case t.SymbolKind.File:return n.Array
case t.SymbolKind.Module:return n.Module
case t.SymbolKind.Namespace:return n.Namespace
case t.SymbolKind.Package:return n.Package
case t.SymbolKind.Class:return n.Class
case t.SymbolKind.Method:return n.Method
case t.SymbolKind.Property:return n.Property
case t.SymbolKind.Field:return n.Field
case t.SymbolKind.Constructor:return n.Constructor
case t.SymbolKind.Enum:return n.Enum
case t.SymbolKind.Interface:return n.Interface
case t.SymbolKind.Function:return n.Function
case t.SymbolKind.Variable:return n.Variable
case t.SymbolKind.Constant:return n.Constant
case t.SymbolKind.String:return n.String
case t.SymbolKind.Number:return n.Number
case t.SymbolKind.Boolean:return n.Boolean
case t.SymbolKind.Array:return n.Array}return n.Function}(e.kind),range:u(e.location.range),selectionRange:u(e.location.range)}}))}))},e}()
n.DocumentSymbolAdapter=v
var y=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri
return this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:u(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri
return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label}
return e.textEdit&&(n.textEdit=s(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(s)),n}))}))},e}()
n.DocumentColorAdapter=y
var b=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,r){var i=e.uri
return this._worker(i).then((function(e){return e.provideFoldingRanges(i.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1}
return void 0!==e.kind&&(n.kind=function(e){switch(e){case t.FoldingRangeKind.Comment:return monaco.languages.FoldingRangeKind.Comment
case t.FoldingRangeKind.Imports:return monaco.languages.FoldingRangeKind.Imports
case t.FoldingRangeKind.Region:return monaco.languages.FoldingRangeKind.Region}}(e.kind)),n}))}))},e}()
n.FoldingRangeAdapter=b})),define("vs/language/css/cssMode",["require","exports","./workerManager","./languageFeatures"],(function(e,n,t,r){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.setupMode=function(e){var n=new t.WorkerManager(e),i=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return n.getLanguageServiceWorker.apply(n,[e].concat(t))},o=e.languageId
monaco.languages.registerCompletionItemProvider(o,new r.CompletionAdapter(i)),monaco.languages.registerHoverProvider(o,new r.HoverAdapter(i)),monaco.languages.registerDocumentHighlightProvider(o,new r.DocumentHighlightAdapter(i)),monaco.languages.registerDefinitionProvider(o,new r.DefinitionAdapter(i)),monaco.languages.registerReferenceProvider(o,new r.ReferenceAdapter(i)),monaco.languages.registerDocumentSymbolProvider(o,new r.DocumentSymbolAdapter(i)),monaco.languages.registerRenameProvider(o,new r.RenameAdapter(i)),monaco.languages.registerColorProvider(o,new r.DocumentColorAdapter(i)),monaco.languages.registerFoldingRangeProvider(o,new r.FoldingRangeAdapter(i)),new r.DiagnosticsAdapter(o,i,e)}}))
