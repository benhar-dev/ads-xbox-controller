var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.ToTimeString=function(date,locale){if(null==date)return"";let useDate;useDate=date instanceof Date?date:new Date(date);let result=TcHmi.Localization.formatDate(useDate,{locale:locale,type:"time"});return result||""}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={}))}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("ToTimeString","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.ToTimeString);