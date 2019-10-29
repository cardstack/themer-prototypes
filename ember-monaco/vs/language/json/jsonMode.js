/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 2.5.1(b4d1a1e6b28e15a0f913a6ed6f733af32cd67470)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/json/workerManager",["require","exports"],(function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(){function e(e){var t=this
this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&12e4<Date.now()-this._lastUsedTime&&this._stopWorker()},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}()
t.WorkerManager=n})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}((function(e,t){"use strict"
var n,r,o,i,a,s,c,u,f,d,l,g,p,h,m,v,b,y,k,C,E,_,w,x,T,S,A,O,I,L,M
Object.defineProperty(t,"__esModule",{value:!0}),(r=n=t.Position||(t.Position={})).create=function(e,t){return{line:e,character:t}},r.is=function(e){var t=e
return ae.objectLiteral(t)&&ae.number(t.line)&&ae.number(t.character)},(i=o=t.Range||(t.Range={})).create=function(e,t,r,o){if(ae.number(e)&&ae.number(t)&&ae.number(r)&&ae.number(o))return{start:n.create(e,t),end:n.create(r,o)}
if(n.is(e)&&n.is(t))return{start:e,end:t}
throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+r+", "+o+"]")},i.is=function(e){var t=e
return ae.objectLiteral(t)&&n.is(t.start)&&n.is(t.end)},(s=a=t.Location||(t.Location={})).create=function(e,t){return{uri:e,range:t}},s.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&(ae.string(t.uri)||ae.undefined(t.uri))},(c=t.LocationLink||(t.LocationLink={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},c.is=function(e){var t=e
return ae.defined(t)&&o.is(t.targetRange)&&ae.string(t.targetUri)&&(o.is(t.targetSelectionRange)||ae.undefined(t.targetSelectionRange))&&(o.is(t.originSelectionRange)||ae.undefined(t.originSelectionRange))},(f=u=t.Color||(t.Color={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},f.is=function(e){var t=e
return ae.number(t.red)&&ae.number(t.green)&&ae.number(t.blue)&&ae.number(t.alpha)},(d=t.ColorInformation||(t.ColorInformation={})).create=function(e,t){return{range:e,color:t}},d.is=function(e){var t=e
return o.is(t.range)&&u.is(t.color)},(l=t.ColorPresentation||(t.ColorPresentation={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},l.is=function(e){var t=e
return ae.string(t.label)&&(ae.undefined(t.textEdit)||E.is(t))&&(ae.undefined(t.additionalTextEdits)||ae.typedArray(t.additionalTextEdits,E.is))},(g=t.FoldingRangeKind||(t.FoldingRangeKind={})).Comment="comment",g.Imports="imports",g.Region="region",(p=t.FoldingRange||(t.FoldingRange={})).create=function(e,t,n,r,o){var i={startLine:e,endLine:t}
return ae.defined(n)&&(i.startCharacter=n),ae.defined(r)&&(i.endCharacter=r),ae.defined(o)&&(i.kind=o),i},p.is=function(e){var t=e
return ae.number(t.startLine)&&ae.number(t.startLine)&&(ae.undefined(t.startCharacter)||ae.number(t.startCharacter))&&(ae.undefined(t.endCharacter)||ae.number(t.endCharacter))&&(ae.undefined(t.kind)||ae.string(t.kind))},(m=h=t.DiagnosticRelatedInformation||(t.DiagnosticRelatedInformation={})).create=function(e,t){return{location:e,message:t}},m.is=function(e){var t=e
return ae.defined(t)&&a.is(t.location)&&ae.string(t.message)},(v=t.DiagnosticSeverity||(t.DiagnosticSeverity={})).Error=1,v.Warning=2,v.Information=3,v.Hint=4,(y=b=t.Diagnostic||(t.Diagnostic={})).create=function(e,t,n,r,o,i){var a={range:e,message:t}
return ae.defined(n)&&(a.severity=n),ae.defined(r)&&(a.code=r),ae.defined(o)&&(a.source=o),ae.defined(i)&&(a.relatedInformation=i),a},y.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&ae.string(t.message)&&(ae.number(t.severity)||ae.undefined(t.severity))&&(ae.number(t.code)||ae.string(t.code)||ae.undefined(t.code))&&(ae.string(t.source)||ae.undefined(t.source))&&(ae.undefined(t.relatedInformation)||ae.typedArray(t.relatedInformation,h.is))},(C=k=t.Command||(t.Command={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var o={title:e,command:t}
return ae.defined(n)&&0<n.length&&(o.arguments=n),o},C.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.title)&&ae.string(t.command)},(_=E=t.TextEdit||(t.TextEdit={})).replace=function(e,t){return{range:e,newText:t}},_.insert=function(e,t){return{range:{start:e,end:e},newText:t}},_.del=function(e){return{range:e,newText:""}},_.is=function(e){var t=e
return ae.objectLiteral(t)&&ae.string(t.newText)&&o.is(t.range)},(x=w=t.TextDocumentEdit||(t.TextDocumentEdit={})).create=function(e,t){return{textDocument:e,edits:t}},x.is=function(e){var t=e
return ae.defined(t)&&D.is(t.textDocument)&&Array.isArray(t.edits)},(S=T=t.CreateFile||(t.CreateFile={})).create=function(e,t){var n={kind:"create",uri:e}
return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(n.options=t),n},S.is=function(e){var t=e
return t&&"create"===t.kind&&ae.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||ae.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ae.boolean(t.options.ignoreIfExists)))},(O=A=t.RenameFile||(t.RenameFile={})).create=function(e,t,n){var r={kind:"rename",oldUri:e,newUri:t}
return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),r},O.is=function(e){var t=e
return t&&"rename"===t.kind&&ae.string(t.oldUri)&&ae.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||ae.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ae.boolean(t.options.ignoreIfExists)))},(L=I=t.DeleteFile||(t.DeleteFile={})).create=function(e,t){var n={kind:"delete",uri:e}
return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(n.options=t),n},L.is=function(e){var t=e
return t&&"delete"===t.kind&&ae.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||ae.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||ae.boolean(t.options.ignoreIfNotExists)))},(M=t.WorkspaceEdit||(t.WorkspaceEdit={})).is=function(e){var t=e
return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return ae.string(e.kind)?T.is(e)||A.is(e)||I.is(e):w.is(e)})))}
var j,D,K,N,P,R,F,V,U,W,B,q,H,z,J=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(E.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(E.replace(e,t))},e.prototype.delete=function(e){this.edits.push(E.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),Y=function(){function e(e){var t=this
this._textEditChanges=Object.create(null),e&&((this._workspaceEdit=e).documentChanges?e.documentChanges.forEach((function(e){if(w.is(e)){var n=new J(e.edits)
t._textEditChanges[e.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new J(e.changes[n])
t._textEditChanges[n]=r})))}return Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(D.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")
var t=e
if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:o=[]}
this._workspaceEdit.documentChanges.push(n),r=new J(o),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.")
var r
if(!(r=this._textEditChanges[e])){var o=[]
this._workspaceEdit.changes[e]=o,r=new J(o),this._textEditChanges[e]=r}return r},e.prototype.createFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(T.create(e,t))},e.prototype.renameFile=function(e,t,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(A.create(e,t,n))},e.prototype.deleteFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(I.create(e,t))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")},e}()
t.WorkspaceChange=Y,(j=t.TextDocumentIdentifier||(t.TextDocumentIdentifier={})).create=function(e){return{uri:e}},j.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.uri)},(K=D=t.VersionedTextDocumentIdentifier||(t.VersionedTextDocumentIdentifier={})).create=function(e,t){return{uri:e,version:t}},K.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.uri)&&(null===t.version||ae.number(t.version))},(N=t.TextDocumentItem||(t.TextDocumentItem={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},N.is=function(e){var t=e
return ae.defined(t)&&ae.string(t.uri)&&ae.string(t.languageId)&&ae.number(t.version)&&ae.string(t.text)},(R=P=t.MarkupKind||(t.MarkupKind={})).PlainText="plaintext",R.Markdown="markdown",(F=P=t.MarkupKind||(t.MarkupKind={})).is=function(e){var t=e
return t===F.PlainText||t===F.Markdown},(V=t.MarkupContent||(t.MarkupContent={})).is=function(e){var t=e
return ae.objectLiteral(e)&&P.is(t.kind)&&ae.string(t.value)},(U=t.CompletionItemKind||(t.CompletionItemKind={})).Text=1,U.Method=2,U.Function=3,U.Constructor=4,U.Field=5,U.Variable=6,U.Class=7,U.Interface=8,U.Module=9,U.Property=10,U.Unit=11,U.Value=12,U.Enum=13,U.Keyword=14,U.Snippet=15,U.Color=16,U.File=17,U.Reference=18,U.Folder=19,U.EnumMember=20,U.Constant=21,U.Struct=22,U.Event=23,U.Operator=24,U.TypeParameter=25,(W=t.InsertTextFormat||(t.InsertTextFormat={})).PlainText=1,W.Snippet=2,(t.CompletionItem||(t.CompletionItem={})).create=function(e){return{label:e}},(t.CompletionList||(t.CompletionList={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(q=B=t.MarkedString||(t.MarkedString={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},q.is=function(e){var t=e
return ae.string(t)||ae.objectLiteral(t)&&ae.string(t.language)&&ae.string(t.value)},(t.Hover||(t.Hover={})).is=function(e){var t=e
return!!t&&ae.objectLiteral(t)&&(V.is(t.contents)||B.is(t.contents)||ae.typedArray(t.contents,B.is))&&(void 0===e.range||o.is(e.range))},(t.ParameterInformation||(t.ParameterInformation={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(t.SignatureInformation||(t.SignatureInformation={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var o={label:e}
return ae.defined(t)&&(o.documentation=t),ae.defined(n)?o.parameters=n:o.parameters=[],o},(H=t.DocumentHighlightKind||(t.DocumentHighlightKind={})).Text=1,H.Read=2,H.Write=3,(t.DocumentHighlight||(t.DocumentHighlight={})).create=function(e,t){var n={range:e}
return ae.number(t)&&(n.kind=t),n},(z=t.SymbolKind||(t.SymbolKind={})).File=1,z.Module=2,z.Namespace=3,z.Package=4,z.Class=5,z.Method=6,z.Property=7,z.Field=8,z.Constructor=9,z.Enum=10,z.Interface=11,z.Function=12,z.Variable=13,z.Constant=14,z.String=15,z.Number=16,z.Boolean=17,z.Array=18,z.Object=19,z.Key=20,z.Null=21,z.EnumMember=22,z.Struct=23,z.Event=24,z.Operator=25,z.TypeParameter=26,(t.SymbolInformation||(t.SymbolInformation={})).create=function(e,t,n,r,o){var i={name:e,kind:t,location:{uri:r,range:n}}
return o&&(i.containerName=o),i}
var G,$,Q,X,Z,ee,te=function(){}
t.DocumentSymbol=te,(G=te=t.DocumentSymbol||(t.DocumentSymbol={})).create=function(e,t,n,r,o,i){var a={name:e,detail:t,kind:n,range:r,selectionRange:o}
return void 0!==i&&(a.children=i),a},G.is=function(e){var t=e
return t&&ae.string(t.name)&&ae.number(t.kind)&&o.is(t.range)&&o.is(t.selectionRange)&&(void 0===t.detail||ae.string(t.detail))&&(void 0===t.deprecated||ae.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))},t.DocumentSymbol=te,($=t.CodeActionKind||(t.CodeActionKind={})).QuickFix="quickfix",$.Refactor="refactor",$.RefactorExtract="refactor.extract",$.RefactorInline="refactor.inline",$.RefactorRewrite="refactor.rewrite",$.Source="source",$.SourceOrganizeImports="source.organizeImports",(Q=t.CodeActionContext||(t.CodeActionContext={})).create=function(e,t){var n={diagnostics:e}
return null!=t&&(n.only=t),n},Q.is=function(e){var t=e
return ae.defined(t)&&ae.typedArray(t.diagnostics,b.is)&&(void 0===t.only||ae.typedArray(t.only,ae.string))},(X=t.CodeAction||(t.CodeAction={})).create=function(e,t,n){var r={title:e}
return k.is(t)?r.command=t:r.edit=t,void 0!==n&&(r.kind=n),r},X.is=function(e){var t=e
return t&&ae.string(t.title)&&(void 0===t.diagnostics||ae.typedArray(t.diagnostics,b.is))&&(void 0===t.kind||ae.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||k.is(t.command))&&(void 0===t.edit||M.is(t.edit))},(Z=t.CodeLens||(t.CodeLens={})).create=function(e,t){var n={range:e}
return ae.defined(t)&&(n.data=t),n},Z.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&(ae.undefined(t.command)||k.is(t.command))},(ee=t.FormattingOptions||(t.FormattingOptions={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},ee.is=function(e){var t=e
return ae.defined(t)&&ae.number(t.tabSize)&&ae.boolean(t.insertSpaces)}
var ne,re,oe,ie=function(){}
t.DocumentLink=ie,(ne=ie=t.DocumentLink||(t.DocumentLink={})).create=function(e,t,n){return{range:e,target:t,data:n}},ne.is=function(e){var t=e
return ae.defined(t)&&o.is(t.range)&&(ae.undefined(t.target)||ae.string(t.target))},t.DocumentLink=ie,t.EOL=["\n","\r\n","\r"],(re=t.TextDocument||(t.TextDocument={})).create=function(e,t,n,r){return new ue(e,t,n,r)},re.is=function(e){var t=e
return!!(ae.defined(t)&&ae.string(t.uri)&&(ae.undefined(t.languageId)||ae.string(t.languageId))&&ae.number(t.lineCount)&&ae.func(t.getText)&&ae.func(t.positionAt)&&ae.func(t.offsetAt))},re.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t
var r=t.length/2|0,o=t.slice(0,r),i=t.slice(r)
e(o,n),e(i,n)
for(var a=0,s=0,c=0;a<o.length&&s<i.length;){var u=n(o[a],i[s])
t[c++]=u<=0?o[a++]:i[s++]}for(;a<o.length;)t[c++]=o[a++]
for(;s<i.length;)t[c++]=i[s++]
return t}(t,(function(e,t){var n=e.range.start.line-t.range.start.line
return 0===n?e.range.start.character-t.range.start.character:n})),o=n.length,i=r.length-1;0<=i;i--){var a=r[i],s=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end)
if(!(c<=o))throw new Error("Overlapping edit")
n=n.substring(0,s)+a.newText+n.substring(c,n.length),o=s}return n},(oe=t.TextDocumentSaveReason||(t.TextDocumentSaveReason={})).Manual=1,oe.AfterDelay=2,oe.FocusOut=3
var ae,se,ce,ue=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end)
return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1)
var o=t.charAt(r)
n="\r"===o||"\n"===o,"\r"===o&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&0<t.length&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0)
var t=this.getLineOffsets(),r=0,o=t.length
if(0===o)return n.create(0,e)
for(;r<o;){var i=Math.floor((r+o)/2)
t[i]>e?o=i:r=i+1}var a=r-1
return n.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets()
if(e.line>=t.length)return this._content.length
if(e.line<0)return 0
var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length
return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}()
se=ae||(ae={}),ce=Object.prototype.toString,se.defined=function(e){return void 0!==e},se.undefined=function(e){return void 0===e},se.boolean=function(e){return!0===e||!1===e},se.string=function(e){return"[object String]"===ce.call(e)},se.number=function(e){return"[object Number]"===ce.call(e)},se.func=function(e){return"[object Function]"===ce.call(e)},se.objectLiteral=function(e){return null!==e&&"object"==typeof e},se.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}})),define("vscode-languageserver-types",["vscode-languageserver-types/main"],(function(e){return e})),define("vs/language/json/languageFeatures",["require","exports","vscode-languageserver-types"],(function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),monaco.Uri
var r=monaco.Range,o=function(){function e(e,t,n){var r=this
this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null)
var o=function(e){var t,n=e.getModeId()
n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return r._doValidate(e.uri,n)}),500)})),r._doValidate(e.uri,n))},i=function(e){monaco.editor.setModelMarkers(e,r._languageId,[])
var t=e.uri.toString(),n=r._listener[t]
n&&(n.dispose(),delete r._listener[t])}
this._disposables.push(monaco.editor.onDidCreateModel(o)),this._disposables.push(monaco.editor.onWillDisposeModel((function(e){i(e),r._resetSchema(e.uri)}))),this._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){i(e.model),o(e.model),r._resetSchema(e.model.uri)}))),this._disposables.push(n.onDidChange((function(e){monaco.editor.getModels().forEach((function(e){e.getModeId()===r._languageId&&(i(e),o(e))}))}))),this._disposables.push({dispose:function(){for(var e in monaco.editor.getModels().forEach(i),r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then((function(t){t.resetSchema(e.toString())}))},e.prototype._doValidate=function(e,t){this._worker(e).then((function(r){return r.doValidation(e.toString()).then((function(r){var o=r.map((function(e){return r="number"==typeof(t=e).code?String(t.code):t.code,{severity:function(e){switch(e){case n.DiagnosticSeverity.Error:return monaco.MarkerSeverity.Error
case n.DiagnosticSeverity.Warning:return monaco.MarkerSeverity.Warning
case n.DiagnosticSeverity.Information:return monaco.MarkerSeverity.Info
case n.DiagnosticSeverity.Hint:return monaco.MarkerSeverity.Hint
default:return monaco.MarkerSeverity.Info}}(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:r,source:t.source}
var t,r})),i=monaco.editor.getModel(e)
i&&i.getModeId()===t&&monaco.editor.setModelMarkers(i,t,o)}))})).then(void 0,(function(e){console.error(e)}))},e}()
function i(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function a(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function s(e){if(e)return new r(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function c(e){if(e)return{range:s(e.range),text:e.newText}}t.DiagnosticsAdapter=o
var u=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,o,a){var u=e.uri
return this._worker(u).then((function(e){return e.doComplete(u.toString(),i(t))})).then((function(o){if(o){var i=e.getWordUntilPosition(t),a=new r(t.lineNumber,i.startColumn,t.lineNumber,i.endColumn),u=o.items.map((function(e){var t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:a,kind:function(e){var t=monaco.languages.CompletionItemKind
switch(e){case n.CompletionItemKind.Text:return t.Text
case n.CompletionItemKind.Method:return t.Method
case n.CompletionItemKind.Function:return t.Function
case n.CompletionItemKind.Constructor:return t.Constructor
case n.CompletionItemKind.Field:return t.Field
case n.CompletionItemKind.Variable:return t.Variable
case n.CompletionItemKind.Class:return t.Class
case n.CompletionItemKind.Interface:return t.Interface
case n.CompletionItemKind.Module:return t.Module
case n.CompletionItemKind.Property:return t.Property
case n.CompletionItemKind.Unit:return t.Unit
case n.CompletionItemKind.Value:return t.Value
case n.CompletionItemKind.Enum:return t.Enum
case n.CompletionItemKind.Keyword:return t.Keyword
case n.CompletionItemKind.Snippet:return t.Snippet
case n.CompletionItemKind.Color:return t.Color
case n.CompletionItemKind.File:return t.File
case n.CompletionItemKind.Reference:return t.Reference}return t.Property}(e.kind)}
return e.textEdit&&(t.range=s(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(c)),e.insertTextFormat===n.InsertTextFormat.Snippet&&(t.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}))
return{isIncomplete:o.isIncomplete,suggestions:u}}}))},e}()
function f(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}
var t}t.CompletionAdapter=u
var d=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri
return this._worker(r).then((function(e){return e.doHover(r.toString(),i(t))})).then((function(e){if(e)return{range:s(e.range),contents:function(e){if(e)return Array.isArray(e)?e.map(f):[f(e)]}(e.contents)}}))},e}()
t.HoverAdapter=d
var l=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var r=e.uri
return this._worker(r).then((function(e){return e.findDocumentSymbols(r.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:function(e){var t=monaco.languages.SymbolKind
switch(e){case n.SymbolKind.File:return t.Array
case n.SymbolKind.Module:return t.Module
case n.SymbolKind.Namespace:return t.Namespace
case n.SymbolKind.Package:return t.Package
case n.SymbolKind.Class:return t.Class
case n.SymbolKind.Method:return t.Method
case n.SymbolKind.Property:return t.Property
case n.SymbolKind.Field:return t.Field
case n.SymbolKind.Constructor:return t.Constructor
case n.SymbolKind.Enum:return t.Enum
case n.SymbolKind.Interface:return t.Interface
case n.SymbolKind.Function:return t.Function
case n.SymbolKind.Variable:return t.Variable
case n.SymbolKind.Constant:return t.Constant
case n.SymbolKind.String:return t.String
case n.SymbolKind.Number:return t.Number
case n.SymbolKind.Boolean:return t.Boolean
case n.SymbolKind.Array:return t.Array}return t.Function}(e.kind),range:s(e.location.range),selectionRange:s(e.location.range)}}))}))},e}()
function g(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}t.DocumentSymbolAdapter=l
var p=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri
return this._worker(r).then((function(e){return e.format(r.toString(),null,g(t)).then((function(e){if(e&&0!==e.length)return e.map(c)}))}))},e}()
t.DocumentFormattingEditProvider=p
var h=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=e.uri
return this._worker(o).then((function(e){return e.format(o.toString(),a(t),g(n)).then((function(e){if(e&&0!==e.length)return e.map(c)}))}))},e}()
t.DocumentRangeFormattingEditProvider=h
var m=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri
return this._worker(n).then((function(e){return e.findDocumentColors(n.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:s(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri
return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),t.color,a(t.range))})).then((function(e){if(e)return e.map((function(e){var t={label:e.label}
return e.textEdit&&(t.textEdit=c(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(c)),t}))}))},e}()
t.DocumentColorAdapter=m
var v=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,r){var o=e.uri
return this._worker(o).then((function(e){return e.provideFoldingRanges(o.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1}
return void 0!==e.kind&&(t.kind=function(e){switch(e){case n.FoldingRangeKind.Comment:return monaco.languages.FoldingRangeKind.Comment
case n.FoldingRangeKind.Imports:return monaco.languages.FoldingRangeKind.Imports
case n.FoldingRangeKind.Region:return monaco.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))},e}()
t.FoldingRangeAdapter=v})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/scanner",["require","exports"],e)}((function(e,t){"use strict"
function n(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||8192<=e&&e<=8203||8239===e||8287===e||12288===e||65279===e}function r(e){return 10===e||13===e||8232===e||8233===e}function o(e){return 48<=e&&e<=57}Object.defineProperty(t,"__esModule",{value:!0}),t.createScanner=function(e,t){void 0===t&&(t=!1)
var i=0,a=e.length,s="",c=0,u=16,f=0
function d(t,n){for(var r=0,o=0;r<t||!n;){var a=e.charCodeAt(i)
if(48<=a&&a<=57)o=16*o+a-48
else if(65<=a&&a<=70)o=16*o+a-65+10
else{if(!(97<=a&&a<=102))break
o=16*o+a-97+10}i++,r++}return r<t&&(o=-1),o}function l(){if(s="",f=0,a<=(c=i))return c=a,u=17
var t=e.charCodeAt(i)
if(n(t)){for(;i++,s+=String.fromCharCode(t),n(t=e.charCodeAt(i)););return u=15}if(r(t))return i++,s+=String.fromCharCode(t),13===t&&10===e.charCodeAt(i)&&(i++,s+="\n"),u=14
switch(t){case 123:return i++,u=1
case 125:return i++,u=2
case 91:return i++,u=3
case 93:return i++,u=4
case 58:return i++,u=6
case 44:return i++,u=5
case 34:return i++,s=function(){for(var t="",n=i;;){if(a<=i){t+=e.substring(n,i),f=2
break}var o=e.charCodeAt(i)
if(34===o){t+=e.substring(n,i),i++
break}if(92!==o){if(0<=o&&o<=31){if(r(o)){t+=e.substring(n,i),f=2
break}f=6}i++}else{if(t+=e.substring(n,i),a<=++i){f=2
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
case 117:var s=d(4,!0)
0<=s?t+=String.fromCharCode(s):f=4
break
default:f=5}n=i}}return t}(),u=10
case 47:var l=i-1
if(47===e.charCodeAt(i+1)){for(i+=2;i<a&&!r(e.charCodeAt(i));)i++
return s=e.substring(l,i),u=12}if(42!==e.charCodeAt(i+1))return s+=String.fromCharCode(t),i++,u=16
i+=2
for(var p=a-1,h=!1;i<p;){if(42===e.charCodeAt(i)&&47===e.charCodeAt(i+1)){i+=2,h=!0
break}i++}return h||(i++,f=1),s=e.substring(l,i),u=13
case 45:if(s+=String.fromCharCode(t),++i===a||!o(e.charCodeAt(i)))return u=16
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s+=function(){var t=i
if(48===e.charCodeAt(i))i++
else for(i++;i<e.length&&o(e.charCodeAt(i));)i++
if(i<e.length&&46===e.charCodeAt(i)){if(!(++i<e.length&&o(e.charCodeAt(i))))return f=3,e.substring(t,i)
for(i++;i<e.length&&o(e.charCodeAt(i));)i++}var n=i
if(i<e.length&&(69===e.charCodeAt(i)||101===e.charCodeAt(i)))if((++i<e.length&&43===e.charCodeAt(i)||45===e.charCodeAt(i))&&i++,i<e.length&&o(e.charCodeAt(i))){for(i++;i<e.length&&o(e.charCodeAt(i));)i++
n=i}else f=3
return e.substring(t,n)}(),u=11
default:for(;i<a&&g(t);)i++,t=e.charCodeAt(i)
if(c===i)return s+=String.fromCharCode(t),i++,u=16
switch(s=e.substring(c,i)){case"true":return u=8
case"false":return u=9
case"null":return u=7}return u=16}}function g(e){if(n(e)||r(e))return!1
switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){i=e,s="",u=16,f=c=0},getPosition:function(){return i},scan:t?function(){for(var e;12<=(e=l())&&e<=15;);return e}:l,getToken:function(){return u},getTokenValue:function(){return s},getTokenOffset:function(){return c},getTokenLength:function(){return i-c},getTokenError:function(){return f}}}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/format",["require","exports","./scanner"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=e("./scanner")
function r(e,t){for(var n="",r=0;r<t;r++)n+=e
return n}function o(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}t.format=function(e,t,i){var a,s,c,u,f
if(t){for(u=t.offset,f=u+t.length,c=u;0<c&&!o(e,c-1);)c--
for(var d=f;d<e.length&&!o(e,d);)d++
s=e.substring(c,d),a=function(e,t){for(var n=0,r=0,o=t.tabSize||4;n<e.length;){var i=e.charAt(n)
if(" "===i)r++
else{if("\t"!==i)break
r+=o}n++}return Math.floor(r/o)}(s,i)}else u=c=a=0,f=(s=e).length
var l,g=function(e,t){for(var n=0;n<t.length;n++){var r=t.charAt(n)
if("\r"===r)return n+1<t.length&&"\n"===t.charAt(n+1)?"\r\n":"\r"
if("\n"===r)return"\n"}return e&&e.eol||"\n"}(i,e),p=!1,h=0
l=i.insertSpaces?r(" ",i.tabSize||4):"\t"
var m=n.createScanner(s,!1),v=!1
function b(){return g+r(l,a+h)}function y(){var e=m.scan()
for(p=!1;15===e||14===e;)p=p||14===e,e=m.scan()
return v=16===e||0!==m.getTokenError(),e}var k=[]
function C(t,n,r){!v&&n<f&&u<r&&e.substring(n,r)!==t&&k.push({offset:n,length:r-n,content:t})}var E=y()
if(17!==E){var _=m.getTokenOffset()+c
C(r(l,a),c,_)}for(;17!==E;){for(var w=m.getTokenOffset()+m.getTokenLength()+c,x=y(),T="";!p&&(12===x||13===x);)C(" ",w,m.getTokenOffset()+c),w=m.getTokenOffset()+m.getTokenLength()+c,T=12===x?b():"",x=y()
if(2===x)1!==E&&(h--,T=b())
else if(4===x)3!==E&&(h--,T=b())
else{switch(E){case 3:case 1:h++,T=b()
break
case 5:case 12:T=b()
break
case 13:T=p?b():" "
break
case 6:T=" "
break
case 10:if(6===x){T=""
break}case 7:case 8:case 9:case 11:case 2:case 4:12===x||13===x?T=" ":5!==x&&17!==x&&(v=!0)
break
case 16:v=!0}!p||12!==x&&13!==x||(T=b())}C(T,w,m.getTokenOffset()+c),E=x}return k},t.isEOL=o})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/parser",["require","exports","./scanner"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n,r=e("./scanner")
function o(e,t,n){return void 0===n&&(n=!1),t>=e.offset&&t<e.offset+e.length||n&&t===e.offset+e.length}function i(e,t,o){void 0===o&&(o=n.DEFAULT)
var i=r.createScanner(e,!1)
function a(e){return e?function(){return e(i.getTokenOffset(),i.getTokenLength())}:function(){return!0}}function s(e){return e?function(t){return e(t,i.getTokenOffset(),i.getTokenLength())}:function(){return!0}}var c=a(t.onObjectBegin),u=s(t.onObjectProperty),f=a(t.onObjectEnd),d=a(t.onArrayBegin),l=a(t.onArrayEnd),g=s(t.onLiteralValue),p=s(t.onSeparator),h=a(t.onComment),m=s(t.onError),v=o&&o.disallowComments,b=o&&o.allowTrailingComma
function y(){for(;;){var e=i.scan()
switch(i.getTokenError()){case 4:k(14)
break
case 5:k(15)
break
case 3:k(13)
break
case 1:v||k(11)
break
case 2:k(12)
break
case 6:k(16)}switch(e){case 12:case 13:v?k(10):h()
break
case 16:k(1)
break
case 15:case 14:break
default:return e}}}function k(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),m(e),0<t.length+n.length)for(var r=i.getToken();17!==r;){if(-1!==t.indexOf(r)){y()
break}if(-1!==n.indexOf(r))break
r=y()}}function C(e){var t=i.getTokenValue()
return e?g(t):u(t),y(),!0}return y(),17===i.getToken()||(function e(){switch(i.getToken()){case 3:return function(){d(),y()
for(var t=!1;4!==i.getToken()&&17!==i.getToken();){if(5===i.getToken()){if(t||k(4,[],[]),p(","),y(),4===i.getToken()&&b)break}else t&&k(6,[],[])
e()||k(4,[],[4,5]),t=!0}return l(),4!==i.getToken()?k(8,[4],[]):y(),!0}()
case 1:return function(){c(),y()
for(var t=!1;2!==i.getToken()&&17!==i.getToken();){if(5===i.getToken()){if(t||k(4,[],[]),p(","),y(),2===i.getToken()&&b)break}else t&&k(6,[],[]);(10!==i.getToken()?(k(3,[],[2,5]),0):(C(!1),6===i.getToken()?(p(":"),y(),e()||k(4,[],[2,5])):k(5,[],[2,5]),1))||k(4,[],[2,5]),t=!0}return f(),2!==i.getToken()?k(7,[2],[]):y(),!0}()
case 10:return C(!0)
default:return function(){switch(i.getToken()){case 11:var e=0
try{"number"!=typeof(e=JSON.parse(i.getTokenValue()))&&(k(2),e=0)}catch(e){k(2)}g(e)
break
case 7:g(null)
break
case 8:g(!0)
break
case 9:g(!1)
break
default:return!1}return y(),!0}()}}()?(17!==i.getToken()&&k(9,[],[]),!0):(k(4,[],[]),!1))}function a(e){switch(typeof e){case"boolean":return"boolean"
case"number":return"number"
case"string":return"string"
default:return"null"}}(n||(n={})).DEFAULT={allowTrailingComma:!1},t.getLocation=function(e,t){var n=[],r=new Object,o=void 0,s={value:{},offset:0,length:0,type:"object",parent:void 0},c=!1
function u(e,t,n,r){s.value=e,s.offset=t,s.length=n,s.type=r,s.colonOffset=void 0,o=s}try{i(e,{onObjectBegin:function(e,i){if(t<=e)throw r
o=void 0,c=e<t,n.push("")},onObjectProperty:function(e,o,i){if(t<o)throw r
if(u(e,o,i,"property"),n[n.length-1]=e,t<=o+i)throw r},onObjectEnd:function(e,i){if(t<=e)throw r
o=void 0,n.pop()},onArrayBegin:function(e,i){if(t<=e)throw r
o=void 0,n.push(0)},onArrayEnd:function(e,i){if(t<=e)throw r
o=void 0,n.pop()},onLiteralValue:function(e,n,o){if(t<n)throw r
if(u(e,n,o,a(e)),t<=n+o)throw r},onSeparator:function(e,i,a){if(t<=i)throw r
if(":"===e&&o&&"property"===o.type)o.colonOffset=i,c=!1,o=void 0
else if(","===e){var s=n[n.length-1]
n[n.length-1]="number"==typeof s?s+1:(c=!0,""),o=void 0}}})}catch(e){if(e!==r)throw e}return{path:n,previousNode:o,isAtPropertyKey:c,matches:function(e){for(var t=0,r=0;t<e.length&&r<n.length;r++)if(e[t]===n[r]||"*"===e[t])t++
else if("**"!==e[t])return!1
return t===e.length}}},t.parse=function(e,t,r){void 0===t&&(t=[]),void 0===r&&(r=n.DEFAULT)
var o=null,a=[],s=[]
function c(e){Array.isArray(a)?a.push(e):o&&(a[o]=e)}return i(e,{onObjectBegin:function(){var e={}
c(e),s.push(a),a=e,o=null},onObjectProperty:function(e){o=e},onObjectEnd:function(){a=s.pop()},onArrayBegin:function(){var e=[]
c(e),s.push(a),a=e,o=null},onArrayEnd:function(){a=s.pop()},onLiteralValue:c,onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},r),a[0]},t.parseTree=function(e,t,r){void 0===t&&(t=[]),void 0===r&&(r=n.DEFAULT)
var o={type:"array",offset:-1,length:-1,children:[],parent:void 0}
function s(e){"property"===o.type&&(o.length=e-o.offset,o=o.parent)}function c(e){return o.children.push(e),e}i(e,{onObjectBegin:function(e){o=c({type:"object",offset:e,length:-1,parent:o,children:[]})},onObjectProperty:function(e,t,n){(o=c({type:"property",offset:t,length:-1,parent:o,children:[]})).children.push({type:"string",value:e,offset:t,length:n,parent:o})},onObjectEnd:function(e,t){o.length=e+t-o.offset,o=o.parent,s(e+t)},onArrayBegin:function(e,t){o=c({type:"array",offset:e,length:-1,parent:o,children:[]})},onArrayEnd:function(e,t){o.length=e+t-o.offset,o=o.parent,s(e+t)},onLiteralValue:function(e,t,n){c({type:a(e),offset:t,length:n,parent:o,value:e}),s(t+n)},onSeparator:function(e,t,n){"property"===o.type&&(":"===e?o.colonOffset=t:","===e&&s(t))},onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},r)
var u=o.children[0]
return u&&delete u.parent,u},t.findNodeAtLocation=function(e,t){if(e){for(var n=e,r=0,o=t;r<o.length;r++){var i=o[r]
if("string"==typeof i){if("object"!==n.type||!Array.isArray(n.children))return
for(var a=!1,s=0,c=n.children;s<c.length;s++){var u=c[s]
if(Array.isArray(u.children)&&u.children[0].value===i){n=u.children[1],a=!0
break}}if(!a)return}else{var f=i
if("array"!==n.type||f<0||!Array.isArray(n.children)||f>=n.children.length)return
n=n.children[f]}}return n}},t.getNodePath=function e(t){if(!t.parent||!t.parent.children)return[]
var n=e(t.parent)
if("property"===t.parent.type){var r=t.parent.children[0].value
n.push(r)}else if("array"===t.parent.type){var o=t.parent.children.indexOf(t);-1!==o&&n.push(o)}return n},t.getNodeValue=function e(t){switch(t.type){case"array":return t.children.map(e)
case"object":for(var n=Object.create(null),r=0,o=t.children;r<o.length;r++){var i=o[r],a=i.children[1]
a&&(n[i.children[0].value]=e(a))}return n
case"null":case"string":case"number":case"boolean":return t.value
default:return}},t.contains=o,t.findNodeAtOffset=function e(t,n,r){if(void 0===r&&(r=!1),o(t,n,r)){var i=t.children
if(Array.isArray(i))for(var a=0;a<i.length&&i[a].offset<=n;a++){var s=e(i[a],n,r)
if(s)return s}return t}},t.visit=i,t.stripComments=function(e,t){var n,o,i=r.createScanner(e),a=[],s=0
do{switch(o=i.getPosition(),n=i.scan()){case 12:case 13:case 17:s!==o&&a.push(e.substring(s,o)),void 0!==t&&a.push(i.getTokenValue().replace(/[^\r\n]/g,t)),s=i.getPosition()}}while(17!==n)
return a.join("")}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/impl/edit",["require","exports","./format","./parser"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=e("./format"),r=e("./parser")
function o(e,t,n,o,a){for(var s,c=t.slice(),u=r.parseTree(e,[]),f=void 0,d=void 0;0<c.length&&(d=c.pop(),void 0===(f=r.findNodeAtLocation(u,c))&&void 0!==n);)n="string"==typeof d?((s={})[d]=n,s):[n]
if(f){if("object"===f.type&&"string"==typeof d&&Array.isArray(f.children)){var l=r.findNodeAtLocation(f,[d])
if(void 0!==l){if(void 0!==n)return i(e,{offset:l.offset,length:l.length,content:JSON.stringify(n)},o)
if(!l.parent)throw new Error("Malformed AST")
var g=f.children.indexOf(l.parent),p=void 0,h=l.parent.offset+l.parent.length
return 0<g?p=(C=f.children[g-1]).offset+C.length:(p=f.offset+1,1<f.children.length&&(h=f.children[1].offset)),i(e,{offset:p,length:h-p,content:""},o)}if(void 0===n)return[]
var m=JSON.stringify(d)+": "+JSON.stringify(n),v=a?a(f.children.map((function(e){return e.children[0].value}))):f.children.length,b=void 0
return i(e,b=0<v?{offset:(C=f.children[v-1]).offset+C.length,length:0,content:","+m}:0===f.children.length?{offset:f.offset+1,length:0,content:m}:{offset:f.offset+1,length:0,content:m+","},o)}if("array"===f.type&&"number"==typeof d&&Array.isArray(f.children)){if(-1===d)return m=""+JSON.stringify(n),b=void 0,i(e,b=0===f.children.length?{offset:f.offset+1,length:0,content:m}:{offset:(C=f.children[f.children.length-1]).offset+C.length,length:0,content:","+m},o)
if(void 0===n&&0<=f.children.length){var y=d,k=f.children[y]
if(b=void 0,1===f.children.length)b={offset:f.offset+1,length:f.length-2,content:""}
else if(f.children.length-1===y){var C,E=(C=f.children[y-1]).offset+C.length
b={offset:E,length:f.offset+f.length-2-E,content:""}}else b={offset:k.offset,length:f.children[y+1].offset-k.offset,content:""}
return i(e,b,o)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof d?"index":"property")+" to parent of type "+f.type)}if(void 0===n)throw new Error("Can not delete in empty document")
return i(e,{offset:u?u.offset:0,length:u?u.length:0,content:JSON.stringify(n)},o)}function i(e,t,r){var o=a(e,t),i=t.offset,s=t.offset+t.content.length
if(0===t.length||0===t.content.length){for(;0<i&&!n.isEOL(o,i-1);)i--
for(;s<o.length&&!n.isEOL(o,s);)s++}for(var c=n.format(o,{offset:i,length:s-i},r),u=c.length-1;0<=u;u--){var f=c[u]
o=a(o,f),i=Math.min(i,f.offset),s=Math.max(s,f.offset+f.length),s+=f.content.length-f.length}return[{offset:i,length:e.length-(o.length-s)-i,content:o.substring(i,s)}]}function a(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}t.removeProperty=function(e,t,n){return o(e,t,void 0,n)},t.setProperty=o,t.applyEdit=a,t.isWS=function(e,t){return-1!=="\r\n \t".indexOf(e.charAt(t))}})),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/main",["require","exports","./impl/format","./impl/edit","./impl/scanner","./impl/parser"],e)}((function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=e("./impl/format"),r=e("./impl/edit"),o=e("./impl/scanner"),i=e("./impl/parser")
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
case 16:return"InvalidCharacter"}return"<unknown ParseErrorCode>"},t.format=function(e,t,r){return n.format(e,t,r)},t.modify=function(e,t,n,o){return r.setProperty(e,t,n,o.formattingOptions,o.getInsertionIndex)},t.applyEdits=function(e,t){for(var n=t.length-1;0<=n;n--)e=r.applyEdit(e,t[n])
return e}})),define("jsonc-parser",["jsonc-parser/main"],(function(e){return e})),define("vs/language/json/tokenization",["require","exports","jsonc-parser"],(function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createTokenizationSupport=function(e){return{getInitialState:function(){return new r(null,null,!1)},tokenize:function(o,i,a,s){return function(e,o,i,a,s){void 0===a&&(a=0)
var c=0,u=!1
switch(i.scanError){case 2:o='"'+o,c=1
break
case 1:o="/*"+o,c=2}var f,d,l=n.createScanner(o),g=i.lastWasColon
for(d={tokens:[],endState:i.clone()};;){var p=a+l.getPosition(),h=""
if(17===(f=l.scan()))break
if(p===a+l.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+o.substr(l.getPosition(),3))
switch(u&&(p-=c),u=0<c,f){case 1:case 2:h=t.TOKEN_DELIM_OBJECT,g=!1
break
case 3:case 4:h=t.TOKEN_DELIM_ARRAY,g=!1
break
case 6:h=t.TOKEN_DELIM_COLON,g=!0
break
case 5:h=t.TOKEN_DELIM_COMMA,g=!1
break
case 8:case 9:h=t.TOKEN_VALUE_BOOLEAN,g=!1
break
case 7:h=t.TOKEN_VALUE_NULL,g=!1
break
case 10:h=g?t.TOKEN_VALUE_STRING:t.TOKEN_PROPERTY_NAME,g=!1
break
case 11:h=t.TOKEN_VALUE_NUMBER,g=!1}if(e)switch(f){case 12:h=t.TOKEN_COMMENT_LINE
break
case 13:h=t.TOKEN_COMMENT_BLOCK}d.endState=new r(i.getStateData(),l.getTokenError(),g),d.tokens.push({startIndex:p,scopes:h})}return d}(e,o,i,a)}}},t.TOKEN_DELIM_OBJECT="delimiter.bracket.json",t.TOKEN_DELIM_ARRAY="delimiter.array.json",t.TOKEN_DELIM_COLON="delimiter.colon.json",t.TOKEN_DELIM_COMMA="delimiter.comma.json",t.TOKEN_VALUE_BOOLEAN="keyword.json",t.TOKEN_VALUE_NULL="keyword.json",t.TOKEN_VALUE_STRING="string.value.json",t.TOKEN_VALUE_NUMBER="number.json",t.TOKEN_PROPERTY_NAME="string.key.json",t.TOKEN_COMMENT_BLOCK="comment.block.json",t.TOKEN_COMMENT_LINE="comment.line.json"
var r=function(){function e(e,t,n){this._state=e,this.scanError=t,this.lastWasColon=n}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}()})),define("vs/language/json/jsonMode",["require","exports","./workerManager","./languageFeatures","./tokenization"],(function(e,t,n,r,o){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.setupMode=function(e){var t=[],a=new n.WorkerManager(e)
t.push(a)
var s=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return a.getLanguageServiceWorker.apply(a,e)},c=e.languageId
t.push(monaco.languages.registerCompletionItemProvider(c,new r.CompletionAdapter(s))),t.push(monaco.languages.registerHoverProvider(c,new r.HoverAdapter(s))),t.push(monaco.languages.registerDocumentSymbolProvider(c,new r.DocumentSymbolAdapter(s))),t.push(monaco.languages.registerDocumentFormattingEditProvider(c,new r.DocumentFormattingEditProvider(s))),t.push(monaco.languages.registerDocumentRangeFormattingEditProvider(c,new r.DocumentRangeFormattingEditProvider(s))),t.push(new r.DiagnosticsAdapter(c,s,e)),t.push(monaco.languages.setTokensProvider(c,o.createTokenizationSupport(!0))),t.push(monaco.languages.setLanguageConfiguration(c,i)),t.push(monaco.languages.registerColorProvider(c,new r.DocumentColorAdapter(s))),t.push(monaco.languages.registerFoldingRangeProvider(c,new r.FoldingRangeAdapter(s)))}
var i={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}))
