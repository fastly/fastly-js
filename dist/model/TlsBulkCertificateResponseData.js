"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsBulkCertificate = _interopRequireDefault(require("./RelationshipsForTlsBulkCertificate"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TlsBulkCertificateData = _interopRequireDefault(require("./TlsBulkCertificateData"));

var _TlsBulkCertificateResponseDataAllOf = _interopRequireDefault(require("./TlsBulkCertificateResponseDataAllOf"));

var _TypeTlsBulkCertificate = _interopRequireDefault(require("./TypeTlsBulkCertificate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsBulkCertificateResponseData model module.
 * @module model/TlsBulkCertificateResponseData
 * @version 3.0.0-alpha1
 */
var TlsBulkCertificateResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsBulkCertificateResponseData</code>.
   * @alias module:model/TlsBulkCertificateResponseData
   */
  function TlsBulkCertificateResponseData() {
    _classCallCheck(this, TlsBulkCertificateResponseData);

    TlsBulkCertificateResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsBulkCertificateResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsBulkCertificateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateResponseData} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateResponseData} The populated <code>TlsBulkCertificateResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsBulkCertificateResponseData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsBulkCertificate["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsBulkCertificate["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsBulkCertificateResponseData;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


TlsBulkCertificateResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsBulkCertificate} relationships
 */

TlsBulkCertificateResponseData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeTlsBulkCertificate} type
 */

TlsBulkCertificateResponseData.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a TLS bulk certificate.
 * @member {String} id
 */

TlsBulkCertificateResponseData.prototype['id'] = undefined;
var _default = TlsBulkCertificateResponseData;
exports["default"] = _default;