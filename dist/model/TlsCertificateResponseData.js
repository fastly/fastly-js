"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsDomains = _interopRequireDefault(require("./RelationshipTlsDomains"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TlsCertificateData = _interopRequireDefault(require("./TlsCertificateData"));

var _TlsCertificateResponseDataAllOf = _interopRequireDefault(require("./TlsCertificateResponseDataAllOf"));

var _TypeTlsCertificate = _interopRequireDefault(require("./TypeTlsCertificate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsCertificateResponseData model module.
 * @module model/TlsCertificateResponseData
 * @version 3.0.0-alpha1
 */
var TlsCertificateResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsCertificateResponseData</code>.
   * @alias module:model/TlsCertificateResponseData
   * @implements module:model/TlsCertificateData
   * @implements module:model/TlsCertificateResponseDataAllOf
   */
  function TlsCertificateResponseData() {
    _classCallCheck(this, TlsCertificateResponseData);

    _TlsCertificateData["default"].initialize(this);

    _TlsCertificateResponseDataAllOf["default"].initialize(this);

    TlsCertificateResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsCertificateResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsCertificateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificateResponseData} obj Optional instance to populate.
     * @return {module:model/TlsCertificateResponseData} The populated <code>TlsCertificateResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsCertificateResponseData();

        _TlsCertificateData["default"].constructFromObject(data, obj);

        _TlsCertificateResponseDataAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsCertificate["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipTlsDomains["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsCertificateResponseData;
}();
/**
 * @member {module:model/TypeTlsCertificate} type
 */


TlsCertificateResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

TlsCertificateResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipTlsDomains} relationships
 */

TlsCertificateResponseData.prototype['relationships'] = undefined;
/**
 * Alphanumeric string identifying a TLS certificate.
 * @member {String} id
 */

TlsCertificateResponseData.prototype['id'] = undefined; // Implement TlsCertificateData interface:

/**
 * @member {module:model/TypeTlsCertificate} type
 */

_TlsCertificateData["default"].prototype['type'] = undefined;
/**
 * @member {module:model/TlsCertificateDataAttributes} attributes
 */

_TlsCertificateData["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipTlsDomains} relationships
 */

_TlsCertificateData["default"].prototype['relationships'] = undefined; // Implement TlsCertificateResponseDataAllOf interface:

/**
 * Alphanumeric string identifying a TLS certificate.
 * @member {String} id
 */

_TlsCertificateResponseDataAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

_TlsCertificateResponseDataAllOf["default"].prototype['attributes'] = undefined;
var _default = TlsCertificateResponseData;
exports["default"] = _default;