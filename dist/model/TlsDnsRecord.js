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
 * The TlsDnsRecord model module.
 * @module model/TlsDnsRecord
 * @version 3.0.0-alpha1
 */
var TlsDnsRecord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsDnsRecord</code>.
   * @alias module:model/TlsDnsRecord
   */
  function TlsDnsRecord() {
    _classCallCheck(this, TlsDnsRecord);

    TlsDnsRecord.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsDnsRecord, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsDnsRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsDnsRecord} obj Optional instance to populate.
     * @return {module:model/TlsDnsRecord} The populated <code>TlsDnsRecord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsDnsRecord();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('record_type')) {
          obj['record_type'] = _ApiClient["default"].convertToType(data['record_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsDnsRecord;
}();
/**
 * The IP address or hostname of the DNS record.
 * @member {String} id
 */


TlsDnsRecord.prototype['id'] = undefined;
/**
 * Specifies the regions that will be used to route traffic. Select DNS Records with a `global` region to route traffic to the most performant point of presence (POP) worldwide (global pricing will apply). Select DNS records with a `us-eu` region to exclusively land traffic on North American and European POPs.
 * @member {String} region
 */

TlsDnsRecord.prototype['region'] = undefined;
/**
 * The type of the DNS record. `A` specifies an IPv4 address to be used for an A record to be used for apex domains (e.g., `example.com`). `AAAA` specifies an IPv6 address for use in an A record for apex domains. `CNAME` specifies the hostname to be used for a CNAME record for subdomains or wildcard domains (e.g., `www.example.com` or `*.example.com`).
 * @member {String} record_type
 */

TlsDnsRecord.prototype['record_type'] = undefined;
var _default = TlsDnsRecord;
exports["default"] = _default;