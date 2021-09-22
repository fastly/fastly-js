"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Server model module.
 * @module model/Server
 * @version 3.0.0-alpha1
 */
var Server = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Server</code>.
   * @alias module:model/Server
   */
  function Server() {
    _classCallCheck(this, Server);

    Server.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Server, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Server</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Server} obj Optional instance to populate.
     * @return {module:model/Server} The populated <code>Server</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Server();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('max_conn')) {
          obj['max_conn'] = _ApiClient["default"].convertToType(data['max_conn'], 'Number');
        }

        if (data.hasOwnProperty('override_host')) {
          obj['override_host'] = _ApiClient["default"].convertToType(data['override_host'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Server;
}();
/**
 * A hostname, IPv4, or IPv6 address for the server. Required.
 * @member {String} address
 */


Server.prototype['address'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

Server.prototype['comment'] = undefined;
/**
 * Allows servers to be enabled and disabled in a pool.
 * @member {Boolean} disabled
 * @default false
 */

Server.prototype['disabled'] = false;
/**
 * Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
 * @member {Number} max_conn
 * @default 0
 */

Server.prototype['max_conn'] = 0;
/**
 * The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */

Server.prototype['override_host'] = 'null';
/**
 * Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
 * @member {Number} port
 * @default 80
 */

Server.prototype['port'] = 80;
/**
 * Weight (`1-100`) used to load balance this server against others.
 * @member {Number} weight
 * @default 100
 */

Server.prototype['weight'] = 100;
var _default = Server;
exports["default"] = _default;