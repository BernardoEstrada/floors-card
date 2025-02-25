const $cf7d3955166dec37$export$7acbea3223c80a5d = (config)=>{
    if (config.show_floor_icons !== undefined) {
        if (typeof config.show_floor_icons !== "boolean" && config.show_floor_icons !== "always") throw new Error("Invalid show_floor_icons value");
    }
    if (config.floor_icons_position !== undefined) {
        if (typeof config.floor_icons_position !== "string" || config.floor_icons_position !== "left" && config.floor_icons_position !== "right") throw new Error("Invalid floor_icons_position value");
    }
    if (config.show_area_icons !== undefined) {
        if (typeof config.show_area_icons !== "boolean" && config.show_area_icons !== "always") throw new Error("Invalid show_area_icons value");
    }
    if (config.area_icons_position !== undefined) {
        if (typeof config.area_icons_position !== "string" || config.area_icons_position !== "left" && config.area_icons_position !== "right") throw new Error("Invalid area_icons_position value");
    }
    if (config.entity_icon_placement !== undefined) {
        if (typeof config.entity_icon_placement !== "string" || config.entity_icon_placement !== "left" && config.entity_icon_placement !== "right") throw new Error("Invalid entity_icon_placement value");
    }
    if (config.domain_sort_order !== undefined) {
        if (!Array.isArray(config.domain_sort_order)) throw new Error("Invalid domain_sort_order value");
        for (const domain of config.domain_sort_order){
            if (typeof domain !== "string") throw new Error("Invalid domain_sort_order value");
        }
    }
    if (config.class_sort_order !== undefined) {
        if (!Array.isArray(config.class_sort_order)) throw new Error("Invalid class_sort_order value");
        for (const className of config.class_sort_order){
            if (typeof className !== "string") throw new Error("Invalid class_sort_order value");
        }
    }
    if (config.include_domains !== undefined) {
        if (!Array.isArray(config.include_domains)) throw new Error("Invalid include_domains value");
        for (const domain of config.include_domains){
            if (typeof domain !== "string") throw new Error("Invalid include_domains value");
        }
    }
    if (config.include_classes !== undefined) {
        if (!Array.isArray(config.include_classes)) throw new Error("Invalid include_classes value");
        for (const className of config.include_classes){
            if (typeof className !== "string") throw new Error("Invalid include_classes value");
        }
    }
    if (config.include_states !== undefined) {
        if (!Array.isArray(config.include_states)) throw new Error("Invalid include_states value");
        for (const state of config.include_states){
            if (typeof state !== "string") throw new Error("Invalid include_states value");
        }
    }
    if (config.include !== undefined) {
        if (typeof config.include !== "object") throw new Error("Invalid include value");
    }
};


const $f0c6e8b60525d698$export$6c85bd7d048585e = {
    header: "Home Overview",
    show_floor_icons: "always",
    show_area_icons: "always",
    preferred_icons: {
        tamper: "mdi:alarm-light-outline"
    }
};


const $fc06ea80e364174b$export$f84bd70098573c5c = {
    show_floor_icons: true,
    floor_gap: 8,
    floor_icons_position: "left",
    show_area_icons: true,
    default_area_icon: "mdi:texture-box",
    off_color: "grey",
    area_icons_position: "left",
    entity_icon_placement: "right",
    domain_sort_order: [
        "light",
        "switch",
        "binary_sensor",
        "sensor",
        "climate"
    ],
    class_sort_order: [
        "door",
        "window",
        "tamper",
        "occupancy"
    ],
    // include: {
    //   light: { states: ["on"] },
    //   input_boolean: { states: ["on"] },
    //   binary_sensor: { states: ["on"], classes: ["door", "window", "occupancy", "tamper"] },
    // },
    include_all: false,
    include_hidden: false,
    preferred_icons: {}
};


console.log("production");
const $b64b39d05b92d8dd$export$bc459fcbbdf9c595 = 'floors-card';
console.log($b64b39d05b92d8dd$export$bc459fcbbdf9c595);




/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $24c52f343453d62d$var$ownKeys = function(o) {
    $24c52f343453d62d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $24c52f343453d62d$var$ownKeys(o);
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $24c52f343453d62d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $24c52f343453d62d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __esDecorate: $24c52f343453d62d$export$3a84e1ae4e97e9b0,
    __runInitializers: $24c52f343453d62d$export$d831c04e792af3d,
    __propKey: $24c52f343453d62d$export$6a2a36740a146cb8,
    __setFunctionName: $24c52f343453d62d$export$d1a06452d3489bc7,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $24c52f343453d62d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = window, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$n = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(n, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, n)=>{
    $def2de46b9306e8a$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $19fe8e3abedf4df0$var$s;
const $19fe8e3abedf4df0$var$e = window, $19fe8e3abedf4df0$var$r = $19fe8e3abedf4df0$var$e.trustedTypes, $19fe8e3abedf4df0$var$h = $19fe8e3abedf4df0$var$r ? $19fe8e3abedf4df0$var$r.emptyScript : "", $19fe8e3abedf4df0$var$o = $19fe8e3abedf4df0$var$e.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $19fe8e3abedf4df0$var$l = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
}, $19fe8e3abedf4df0$var$d = "finalized";
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $19fe8e3abedf4df0$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $19fe8e3abedf4df0$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d)) return !1;
        this[$19fe8e3abedf4df0$var$d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        } else void 0 !== i && s.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $19fe8e3abedf4df0$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d] = !0, $19fe8e3abedf4df0$export$c7c07a37856565d.elementProperties = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $19fe8e3abedf4df0$var$o || $19fe8e3abedf4df0$var$o({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), (null !== ($19fe8e3abedf4df0$var$s = $19fe8e3abedf4df0$var$e.reactiveElementVersions) && void 0 !== $19fe8e3abedf4df0$var$s ? $19fe8e3abedf4df0$var$s : $19fe8e3abedf4df0$var$e.reactiveElementVersions = []).push("1.6.3");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $f58f44579a4747ac$var$t;
const $f58f44579a4747ac$var$i = window, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$o = "$lit$", $f58f44579a4747ac$var$n = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$l = "?" + $f58f44579a4747ac$var$n, $f58f44579a4747ac$var$h = `<${$f58f44579a4747ac$var$l}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$u = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$c = Array.isArray, $f58f44579a4747ac$var$v = (t)=>$f58f44579a4747ac$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $f58f44579a4747ac$var$a = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$a}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$a}*=${$f58f44579a4747ac$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$w(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$w(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$E = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129, null, !1);
function $f58f44579a4747ac$var$P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $f58f44579a4747ac$var$f ? "!--" === c[1] ? u = $f58f44579a4747ac$var$_ : void 0 !== c[1] ? u = $f58f44579a4747ac$var$m : void 0 !== c[2] ? ($f58f44579a4747ac$var$y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = $f58f44579a4747ac$var$p) : void 0 !== c[3] && (u = $f58f44579a4747ac$var$p) : u === $f58f44579a4747ac$var$p ? ">" === c[0] ? (u = null != l ? l : $f58f44579a4747ac$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? $f58f44579a4747ac$var$p : '"' === c[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : u === $f58f44579a4747ac$var$$ || u === $f58f44579a4747ac$var$g ? u = $f58f44579a4747ac$var$p : u === $f58f44579a4747ac$var$_ || u === $f58f44579a4747ac$var$m ? u = $f58f44579a4747ac$var$f : (u = $f58f44579a4747ac$var$p, l = void 0);
        const w = u === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$h : v >= 0 ? (e.push(d), s.slice(0, v) + $f58f44579a4747ac$var$o + s.slice(v) + $f58f44579a4747ac$var$n + w) : s + $f58f44579a4747ac$var$n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        $f58f44579a4747ac$var$P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $f58f44579a4747ac$var$V(t, i);
        if (this.el = $f58f44579a4747ac$var$N.createElement(a, e), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $f58f44579a4747ac$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($f58f44579a4747ac$var$o) || i.startsWith($f58f44579a4747ac$var$n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $f58f44579a4747ac$var$o).split($f58f44579a4747ac$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $f58f44579a4747ac$var$H : "?" === i[1] ? $f58f44579a4747ac$var$L : "@" === i[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($f58f44579a4747ac$var$y.test(h.tagName)) {
                    const t = h.textContent.split($f58f44579a4747ac$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $f58f44579a4747ac$var$u()), $f58f44579a4747ac$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $f58f44579a4747ac$var$u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $f58f44579a4747ac$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($f58f44579a4747ac$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $f58f44579a4747ac$var$n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $f58f44579a4747ac$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $f58f44579a4747ac$var$S(t, r._$AS(t, i.values), r, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $f58f44579a4747ac$var$r).importNode(s, !0);
        $f58f44579a4747ac$var$C.currentNode = o;
        let n = $f58f44579a4747ac$var$C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new $f58f44579a4747ac$var$R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new $f58f44579a4747ac$var$Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = $f58f44579a4747ac$var$C.nextNode(), l++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$d(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $f58f44579a4747ac$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.$($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $f58f44579a4747ac$var$M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$E.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$E.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    T(t) {
        $f58f44579a4747ac$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.k($f58f44579a4747ac$var$u()), this.k($f58f44579a4747ac$var$u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $f58f44579a4747ac$var$S(this, t, i, 0), n = !$f58f44579a4747ac$var$d(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $f58f44579a4747ac$var$S(this, e[s + l], i, l), h === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$f58f44579a4747ac$var$d(h) || h !== this._$AH[l]), h === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $f58f44579a4747ac$var$I = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $f58f44579a4747ac$var$I) : this.element.removeAttribute(this.name);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $f58f44579a4747ac$var$S(this, t, i, 0)) && void 0 !== s ? s : $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $f58f44579a4747ac$export$45b790e32b2810ee && e !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (e === $f58f44579a4747ac$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    O: $f58f44579a4747ac$var$o,
    P: $f58f44579a4747ac$var$n,
    A: $f58f44579a4747ac$var$l,
    C: 1,
    M: $f58f44579a4747ac$var$V,
    L: $f58f44579a4747ac$var$M,
    R: $f58f44579a4747ac$var$v,
    D: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    V: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$L,
    N: $f58f44579a4747ac$var$z,
    U: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$i.litHtmlPolyfillSupport;
null == $f58f44579a4747ac$var$B || $f58f44579a4747ac$var$B($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), (null !== ($f58f44579a4747ac$var$t = $f58f44579a4747ac$var$i.litHtmlVersions) && void 0 !== $f58f44579a4747ac$var$t ? $f58f44579a4747ac$var$t : $f58f44579a4747ac$var$i.litHtmlVersions = []).push("2.8.0");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $ab210b2da7b39b9d$var$l, $ab210b2da7b39b9d$var$o;
const $ab210b2da7b39b9d$export$8bf27daf9e8907c9 = (0, $19fe8e3abedf4df0$export$c7c07a37856565d);
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157.finalized = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, null === ($ab210b2da7b39b9d$var$l = globalThis.litElementHydrateSupport) || void 0 === $ab210b2da7b39b9d$var$l || $ab210b2da7b39b9d$var$l.call(globalThis, {
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$n = globalThis.litElementPolyfillSupport;
null == $ab210b2da7b39b9d$var$n || $ab210b2da7b39b9d$var$n({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($ab210b2da7b39b9d$var$o = globalThis.litElementVersions) && void 0 !== $ab210b2da7b39b9d$var$o ? $ab210b2da7b39b9d$var$o : globalThis.litElementVersions = []).push("3.3.3");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t, elements: s } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }, $9cd908ed2625c047$var$e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(n) {
    return (t, o)=>void 0 !== o ? $9cd908ed2625c047$var$e(n, t, o) : $9cd908ed2625c047$var$i(n, t);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(t) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...t,
        state: !0
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$29fd0ed4087278b5 = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, $25e9c5a8f7ecfc69$export$18eb0154d0069a01 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), $25e9c5a8f7ecfc69$export$757d561a932dc1cb = ({ finisher: e, descriptor: t })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(e) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(i, n) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ed34c589b230c255$export$dcd0d083aa86c355(e) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(e) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $563fcf7ce7e6c5aa$var$n;
const $563fcf7ce7e6c5aa$var$e = null != (null === ($563fcf7ce7e6c5aa$var$n = window.HTMLSlotElement) || void 0 === $563fcf7ce7e6c5aa$var$n ? void 0 : $563fcf7ce7e6c5aa$var$n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(n) {
    const { slot: l, selector: t } = null != n ? n : {};
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? $563fcf7ce7e6c5aa$var$e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, $563fcf7ce7e6c5aa$export$4682af2d9ee91415)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}





const $120c5a859c012378$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host {
    display: block;
    /* padding: 16px; */
  }
  h2 {
    margin: 0;
    display: flex;
    align-items: center;
    &.icon-right {
      flex-direction: row-reverse;
      justify-content: flex-end;
      > ha-icon {
        margin-left: 8px;
      }
    }
    &.icon-left {
      flex-direction: row;
      justify-content: flex-start;
      > ha-icon {
        margin-right: 8px;
      }
    }
  }
  h3 {
    margin-right: 8px;
    margin-left: 16px;
    display: flex;
    align-items: center;
    &.icon-right {
      flex-direction: row-reverse;
      justify-content: flex-end;
      > ha-icon {
        margin-left: 8px;
      }
    }
    &.icon-left {
      flex-direction: row;
      justify-content: flex-start;
      > ha-icon {
        margin-right: 8px;
      }
    }
  }
  ha-card {
    overflow: hidden;
    /* padding: 16px; */
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, 0px 2px 4px rgba(0, 0, 0, 0.1));
  }
  .card-content {
    display: flex;
    flex-direction: column;
  }
  .floor {
    /* margin-bottom: 24px; */
  }
  .area {
    /* margin: 8px 0; */
    display: flex;
    align-items: center;
    &.entity-icons-right {
      justify-content: space-between;
    }
    &.entity-icons-left {
      justify-content: flex-start;
    }
  }
  .entities {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5em;
  }
  .entity-card-button {
    border-radius: 50%;
    --mdc-icon-button-size: 36px;
  }
  .entity-card-button ha-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    --mdc-icon-size: 0.9em;
  }
`;




/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: $311430566e21b48b$var$l } = (0, $f58f44579a4747ac$export$8613d1ca9052b22e), $311430566e21b48b$export$c3825b437cbdea5c = (o)=>null === o || "object" != typeof o && "function" != typeof o, $311430566e21b48b$export$80c36ae3cab9881d = {
    HTML: 1,
    SVG: 2
}, $311430566e21b48b$export$6b6d145ec2a44ca9 = (o, l)=>void 0 === l ? void 0 !== (null == o ? void 0 : o._$litType$) : (null == o ? void 0 : o._$litType$) === l, $311430566e21b48b$export$6a0e8de894d2fcca = (o)=>{
    var l;
    return null != (null === (l = null == o ? void 0 : o._$litType$) || void 0 === l ? void 0 : l.h);
}, $311430566e21b48b$export$2f448fec17d50a3e = (o)=>void 0 !== (null == o ? void 0 : o._$litDirective$), $311430566e21b48b$export$f28e31de6a6eaf32 = (o)=>null == o ? void 0 : o._$litDirective$, $311430566e21b48b$export$7f431ad0fff82fd9 = (o)=>void 0 === o.strings, $311430566e21b48b$var$r = ()=>document.createComment(""), $311430566e21b48b$export$291b2338ad9b0b30 = (o, i, n)=>{
    var t;
    const v = o._$AA.parentNode, d = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = v.insertBefore($311430566e21b48b$var$r(), d), t = v.insertBefore($311430566e21b48b$var$r(), d);
        n = new $311430566e21b48b$var$l(i, t, o, o.options);
    } else {
        const l = n._$AB.nextSibling, i = n._$AM, u = i !== o;
        if (u) {
            let l;
            null === (t = n._$AQ) || void 0 === t || t.call(n, o), n._$AM = o, void 0 !== n._$AP && (l = o._$AU) !== i._$AU && n._$AP(l);
        }
        if (l !== d || u) {
            let o = n._$AA;
            for(; o !== l;){
                const l = o.nextSibling;
                v.insertBefore(o, d), o = l;
            }
        }
    }
    return n;
}, $311430566e21b48b$export$cb8bf9562088e9f4 = (o, l, i = o)=>(o._$AI(l, i), o), $311430566e21b48b$var$s = {}, $311430566e21b48b$export$ea70d9dd5965b1c8 = (o, l = $311430566e21b48b$var$s)=>o._$AH = l, $311430566e21b48b$export$59e9bce518cde500 = (o)=>o._$AH, $311430566e21b48b$export$3133b3144bbba267 = (o)=>{
    var l;
    null === (l = o._$AP) || void 0 === l || l.call(o, !1, !0);
    let i = o._$AA;
    const n = o._$AB.nextSibling;
    for(; i !== n;){
        const o = i.nextSibling;
        i.remove(), i = o;
    }
}, $311430566e21b48b$export$7f600b8138c094dc = (o)=>{
    o._$AR();
};



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1e333afec87b6405$var$s = (i, t)=>{
    var e, o;
    const r = i._$AN;
    if (void 0 === r) return !1;
    for (const i of r)null === (o = (e = i)._$AO) || void 0 === o || o.call(e, t, !1), $1e333afec87b6405$var$s(i, t);
    return !0;
}, $1e333afec87b6405$var$o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === (null == e ? void 0 : e.size));
}, $1e333afec87b6405$var$r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), $1e333afec87b6405$var$l(t);
    }
};
function $1e333afec87b6405$var$n(i) {
    void 0 !== this._$AN ? ($1e333afec87b6405$var$o(this), this._$AM = i, $1e333afec87b6405$var$r(this)) : this._$AM = i;
}
function $1e333afec87b6405$var$h(i, t = !1, e = 0) {
    const r = this._$AH, n = this._$AN;
    if (void 0 !== n && 0 !== n.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)$1e333afec87b6405$var$s(r[i], !1), $1e333afec87b6405$var$o(r[i]);
            else null != r && ($1e333afec87b6405$var$s(r, !1), $1e333afec87b6405$var$o(r));
        } else $1e333afec87b6405$var$s(this, i);
    }
}
const $1e333afec87b6405$var$l = (i)=>{
    var t, s, o, r;
    i.type == (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).CHILD && (null !== (t = (o = i)._$AP) && void 0 !== t || (o._$AP = $1e333afec87b6405$var$h), null !== (s = (r = i)._$AQ) && void 0 !== s || (r._$AQ = $1e333afec87b6405$var$n));
};
class $1e333afec87b6405$export$7d025501802325e extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i, t, e) {
        super._$AT(i, t, e), $1e333afec87b6405$var$r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        var e, r;
        i !== this.isConnected && (this.isConnected = i, i ? null === (e = this.reconnected) || void 0 === e || e.call(this) : null === (r = this.disconnected) || void 0 === r || r.call(this)), t && ($1e333afec87b6405$var$s(this, i), $1e333afec87b6405$var$o(this));
    }
    setValue(t) {
        if ((0, $311430566e21b48b$export$7f431ad0fff82fd9)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}


/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $489699fe18200827$export$74673a32c6041f3e = async (t, s)=>{
    for await (const i of t)if (!1 === await s(i)) return;
};
class $489699fe18200827$export$71341b9b69479007 {
    constructor(t){
        this.G = t;
    }
    disconnect() {
        this.G = void 0;
    }
    reconnect(t) {
        this.G = t;
    }
    deref() {
        return this.G;
    }
}
class $489699fe18200827$export$193ea5a420bb5c41 {
    constructor(){
        this.Y = void 0, this.Z = void 0;
    }
    get() {
        return this.Y;
    }
    pause() {
        var t;
        null !== (t = this.Y) && void 0 !== t || (this.Y = new Promise((t)=>this.Z = t));
    }
    resume() {
        var t;
        null === (t = this.Z) || void 0 === t || t.call(this), this.Y = this.Z = void 0;
    }
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $946b345e72533d5d$var$n = (t)=>!(0, $311430566e21b48b$export$c3825b437cbdea5c)(t) && "function" == typeof t.then, $946b345e72533d5d$var$h = 1073741823;
class $946b345e72533d5d$export$51c6edf8ee19b71a extends (0, $1e333afec87b6405$export$7d025501802325e) {
    constructor(){
        super(...arguments), this._$C_t = $946b345e72533d5d$var$h, this._$Cwt = [], this._$Cq = new (0, $489699fe18200827$export$71341b9b69479007)(this), this._$CK = new (0, $489699fe18200827$export$193ea5a420bb5c41);
    }
    render(...s) {
        var i;
        return null !== (i = s.find((t)=>!$946b345e72533d5d$var$n(t))) && void 0 !== i ? i : (0, $f58f44579a4747ac$export$9c068ae9cc5db4e8);
    }
    update(s, i) {
        const r = this._$Cwt;
        let e = r.length;
        this._$Cwt = i;
        const o = this._$Cq, c = this._$CK;
        this.isConnected || this.disconnected();
        for(let t = 0; t < i.length && !(t > this._$C_t); t++){
            const s = i[t];
            if (!$946b345e72533d5d$var$n(s)) return this._$C_t = t, s;
            t < e && s === r[t] || (this._$C_t = $946b345e72533d5d$var$h, e = 0, Promise.resolve(s).then(async (t)=>{
                for(; c.get();)await c.get();
                const i = o.deref();
                if (void 0 !== i) {
                    const r = i._$Cwt.indexOf(s);
                    r > -1 && r < i._$C_t && (i._$C_t = r, i.setValue(t));
                }
            }));
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
    disconnected() {
        this._$Cq.disconnect(), this._$CK.pause();
    }
    reconnected() {
        this._$Cq.reconnect(this), this._$CK.resume();
    }
}
const $946b345e72533d5d$export$a40009bd2c363351 = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($946b345e72533d5d$export$51c6edf8ee19b71a);





class $a399cc6bbb0eb26a$export$2e2bcd8739ae039 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $120c5a859c012378$export$9dd6ff9ea0189349);
    }
    constructor(){
        super(), this._entities = [], this._floors = {}, this._areas = {}, this._entityCards = new Map(), this._entitiesContainerCard = new Map(), this.entityStateFilter = (entity)=>{
            const domain = entity.entity_id.split(".")[0];
            const deviceClass = entity.attributes.device_class || 'no_class';
            if (this.config.include) {
                const include = this.config.include[domain];
                if (include) {
                    if (include.classes && !include.classes.includes(deviceClass)) return false;
                    if (include.states && !include.states.includes(entity.state)) return false;
                    if (this.config.include_states && !this.config.include_states.includes(entity.state)) return false;
                    if (this._hass.entities[entity.entity_id]?.hidden && !this.config.include_hidden) return false;
                    return true;
                }
                return false;
            } else {
                const domainIncluded = this.config.include_domains?.includes(domain) ?? false;
                const classIncluded = this.config.include_classes?.includes(deviceClass) ?? false;
                const stateIncluded = this.config.include_states?.includes(entity.state) ?? true;
                const hidden = this._hass.entities[entity.entity_id]?.hidden;
                const includeHidden = this.config.include_hidden || !hidden;
                return (domainIncluded && classIncluded || this.config.include_all) && stateIncluded && includeHidden;
            }
        }, this._entitySort = (a, b)=>{
            const aDomain = a.entity_id.split(".")[0];
            const bDomain = b.entity_id.split(".")[0];
            const domainCompare = this.config.domain_sort_order.indexOf(aDomain) - this.config.domain_sort_order.indexOf(bDomain);
            return domainCompare !== 0 ? domainCompare : a.entity_id.localeCompare(b.entity_id);
        }, this._iconCache = new Map(), this._colorCache = new Map();
        this.config = (0, $fc06ea80e364174b$export$f84bd70098573c5c);
    }
    setConfig(config) {
        (0, $cf7d3955166dec37$export$7acbea3223c80a5d)(config);
        this.config = {
            ...(0, $fc06ea80e364174b$export$f84bd70098573c5c),
            ...config
        };
    }
    set hass(hass) {
        if (this._hass === hass) return;
        this._hass = hass;
        // Clear cache when entities change
        if (!this._updateEntities(hass)) return;
        this.requestUpdate();
    }
    _updateEntities(hass) {
        const newEntities = Object.values(hass.states).filter(this.entityStateFilter);
        const entitiesChanged = newEntities.length !== this._entities.length || newEntities.some((e, i)=>e.entity_id !== this._entities[i]?.entity_id || e.last_changed !== this._entities[i]?.last_changed);
        if (!entitiesChanged) return false;
        this._entities = newEntities;
        this._floors = hass.floors || {};
        this._areas = hass.areas || {};
        this._iconCache.clear();
        this._colorCache.clear();
        return true;
    }
    render() {
        if (!this._hass) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-card>Loading...</ha-card>`;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-card .header=${this.config.header || (0, $f58f44579a4747ac$export$45b790e32b2810ee)}>
        <div style="gap: ${this.config.floor_gap}px" class="card-content">${this._renderFloors()}</div>
      </ha-card>
    `;
    }
    _renderFloors() {
        const floors = this._groupAreasByFloor();
        return Object.values(floors).map((floor)=>{
            const renderedAreas = floor.areas.map((area)=>this._renderArea(area));
            if (renderedAreas.every((area)=>area === (0, $f58f44579a4747ac$export$45b790e32b2810ee))) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)` <div class="floor">
        ${this._renderFloorHeader(floor)} ${renderedAreas}
      </div>`;
        });
    }
    _groupAreasByFloor() {
        const floors = {};
        Object.values(this._areas).forEach((area)=>{
            const floorId = area.floor_id || "unknown";
            floors[floorId] ??= {
                ...this._floors[floorId],
                name: this._floors[floorId]?.name || "Unknown Floor",
                areas: []
            };
            floors[floorId].areas.push(area);
        });
        return floors;
    }
    _renderFloorHeader(floor) {
        const floorIcon = this.config.show_floor_icons == 'always' ? floor.icon || `mdi:home-floor-${floor.floor_id}` : floor.icon;
        const headerClass = this.config.floor_icons_position == 'right' ? 'icon-right' : 'icon-left';
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <h2 class="${headerClass}">
        ${this.config.show_floor_icons ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon .icon=${floorIcon}></ha-icon>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
        ${floor.name}
      </h2>
    `;
    }
    _renderArea(area) {
        const entities = this._getAreaEntities(area);
        if (entities.length === 0) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        const entitiesCardContainer = this.config.entities_container_card ? (0, $946b345e72533d5d$export$a40009bd2c363351)(this._getEntitiesContainerCard(area.area_id, entities), (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`Loading...`) : (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
          <div class="entities">
            ${entities.map((entity)=>(0, $946b345e72533d5d$export$a40009bd2c363351)(this._getEntityCard(entity.entity_id), (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`Loading...`))}
          </div>
        `;
        const areaIconClass = this.config.entity_icon_placement == 'left' ? 'entity-icons-left' : 'entity-icons-right';
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="area ${areaIconClass}">
        ${this._renderAreaHeader(area)} ${entitiesCardContainer}
      </div>
    `;
    }
    _getAreaEntities(area) {
        return this._entities.filter((entity)=>{
            const entityArea = this._hass.entities[entity.entity_id]?.area_id || this._hass.devices[this._hass.entities[entity.entity_id]?.device_id]?.area_id;
            return entityArea === area.area_id;
        }).sort(this._entitySort);
    }
    _renderAreaHeader(area) {
        const areaIcon = this.config.show_area_icons == 'always' ? area.icon || this.config.default_area_icon : area.icon;
        const headerClass = this.config.area_icons_position == 'right' ? 'icon-right' : 'icon-left';
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <h3 class="${headerClass}">
        ${this.config.show_area_icons ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon .icon=${areaIcon}></ha-icon>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
        ${area.name}
      </h3>
    `;
    }
    async _getEntitiesContainerCard(area_id, entities) {
        if (this.config.entities_container_card) {
            const config_overrides = {
                [this.config.entities_container_card.cards_param]: entities.map((entity)=>this._createEntityCardConfig(entity.entity_id))
            };
            const config = Object.assign({}, this.config.entities_container_card, config_overrides);
            const entitiesContainerCardKey = `${area_id}-${entities.length}`;
            if (!this._entitiesContainerCard[entitiesContainerCardKey]) this._entitiesContainerCard[entitiesContainerCardKey] = this._createCard(config);
            return this._entitiesContainerCard[entitiesContainerCardKey];
        }
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)` <div class="entities">
      ${entities.map((entity)=>(0, $946b345e72533d5d$export$a40009bd2c363351)(this._getEntityCard(entity.entity_id), (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`Loading...`))}
    </div>`;
    }
    async _getEntityCard(entity_id) {
        if (this.config.entity_card) {
            if (!this._entityCards.has(entity_id)) this._entityCards.set(entity_id, this._createCard(this._createEntityCardConfig(entity_id)));
            return this._entityCards.get(entity_id);
        }
        const entityColor = this._getEntityColor(entity_id);
        const icon = this._getEntityIcon(entity_id);
        const iconColor = entityColor.includes("#") ? entityColor : `var(--${entityColor}-color)`;
        const backgroundColor = `rgb(from ${iconColor} r g b / 0.2)`;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="entity-card">
        <ha-icon-button
          .label=${entity_id}
          class="entity-card-button"
          size="50"
          style="background-color: ${backgroundColor};"
          @click=${()=>this._handleMoreInfo(entity_id)}
        >
          <ha-icon .icon=${icon} style="color: ${iconColor};"></ha-icon>
        </ha-icon-button>
      </div>
    `;
    }
    _handleMoreInfo(entityId) {
        const event = new Event("hass-more-info", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            entityId: entityId,
            view: "info"
        };
        this.dispatchEvent(event);
    }
    async _createCard(cardConfig) {
        const helpers = await window.loadCardHelpers();
        const card = helpers.createCardElement(cardConfig);
        card.hass = this._hass;
        // await card.requestUpdate();
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`${card}`;
    }
    _createEntityCardConfig(entity_id) {
        return {
            ...this.config.entity_card,
            entity: entity_id,
            icon: this._getEntityIcon(entity_id),
            icon_color: this._getEntityColor(entity_id)
        };
    // return {
    //   type: "custom:mushroom-template-card",
    //   entity: entity_id,
    //   icon: this._getEntityIcon(entity_id),
    //   icon_color: this._getEntityColor(entity_id),
    //   tap_action: { action: "more-info" },
    //   card_mod: {
    //     style: {
    //       "mushroom-card mushroom-state-item$": css`
    //         .container { padding: 0 !important; padding-bottom: 4px !important; }
    //       `,
    //     },
    //   },
    // };
    }
    _getEntityIcon(entity_id) {
        const entity = this._hass.states[entity_id];
        const cacheKey = `${entity_id}|${entity.attributes.icon}|${entity.state}|${entity.attributes.device_class}`;
        if (!this._iconCache.has(cacheKey)) {
            const [domain] = entity_id.split(".");
            const deviceClass = entity.attributes.device_class;
            const icon = this.config.preferred_icons[entity_id] || this.config.preferred_icons[deviceClass] || entity.attributes.icon || this._defaultIcon(domain, deviceClass);
            this._iconCache.set(cacheKey, icon);
        }
        return this._iconCache.get(cacheKey);
    }
    _defaultIcon(domain, deviceClass) {
        if (domain === "light") return "mdi:lightbulb";
        if (domain === "binary_sensor") switch(deviceClass){
            case "door":
                return "mdi:door-sliding-open";
            case "window":
                return "mdi:window-closed";
            case "occupancy":
                return "mdi:motion-sensor";
            case "tamper":
                return "m3rf:policy-alert";
        }
        return "mdi:alert-circle-outline";
    }
    _getEntityColor(entity_id) {
        const entity = this._hass.states[entity_id];
        const cacheKey = `${entity_id}|${entity.state}|${JSON.stringify(entity.attributes)}`;
        if (!this._colorCache.has(cacheKey)) {
            const color = this._getEntityColorValue(entity);
            this._colorCache.set(cacheKey, color);
        }
        return this._colorCache.get(cacheKey);
    }
    _getEntityColorValue(entity) {
        if (entity.state === "off" && this.config.off_color) return this.config.off_color;
        if (entity.entity_id.includes("light.")) {
            if (entity.attributes.rgb_color) {
                const rgb = entity.attributes.rgb_color;
                return `#${(16777216 + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)}`;
            }
            return "orange";
        }
        if (entity.entity_id.includes("binary_sensor.")) switch(entity.attributes.device_class){
            case "door":
                return "green";
            case "window":
                return "green";
            case "occupancy":
                return "blue";
            case "tamper":
                return "red";
        }
        return "grey";
    }
    static{
        this.getStubConfig = ()=>(0, $f0c6e8b60525d698$export$6c85bd7d048585e);
    }
    getCardSize() {
        return 3;
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$2e2bcd8739ae039.prototype, "_entities", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$2e2bcd8739ae039.prototype, "_floors", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$2e2bcd8739ae039.prototype, "_areas", void 0);
$a399cc6bbb0eb26a$export$2e2bcd8739ae039 = (0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $14742f68afc766d6$export$da64fc29f17f9d0e)((0, $b64b39d05b92d8dd$export$bc459fcbbdf9c595))
], $a399cc6bbb0eb26a$export$2e2bcd8739ae039);







class $d067581fc0d59830$export$2e2bcd8739ae039 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    setConfig(config) {
        this._config = config;
    }
    static{
        this.styles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
  `;
    }
    render() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <form class="table">
                <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="entity">Entity:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="entity" value="${this._config.entity}"></input>
                </div>
            </form>
        `;
    }
    handleChangedEvent(changedEvent) {
        const target = changedEvent.target;
        // this._config is readonly, copy needed
        const newConfig = Object.assign({}, this._config);
        if (target.id == "header") newConfig.header = target.value;
        else if (target.id == "entity") newConfig.entity = target.value;
        const messageEvent = new CustomEvent("config-changed", {
            detail: {
                config: newConfig
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(messageEvent);
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$2e2bcd8739ae039.prototype, "_config", void 0);


console.log("production");
console.log((0, $b64b39d05b92d8dd$export$bc459fcbbdf9c595));
customElements.define((0, $b64b39d05b92d8dd$export$bc459fcbbdf9c595), (0, $a399cc6bbb0eb26a$export$2e2bcd8739ae039));
customElements.define(`${(0, $b64b39d05b92d8dd$export$bc459fcbbdf9c595)}-editor`, (0, $d067581fc0d59830$export$2e2bcd8739ae039));
window.customCards = window.customCards || [];
window.customCards.push({
    type: (0, $b64b39d05b92d8dd$export$bc459fcbbdf9c595),
    name: "toggle card with TypeScript",
    description: "Turn an entity on and off"
});


//# sourceMappingURL=card.js.map
