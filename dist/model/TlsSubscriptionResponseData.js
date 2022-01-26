"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfAnyTypeAnyTyperelationshipTlsDomainsrelationshipTlsCertificates = _interopRequireDefault(require("./AnyOfAnyTypeAnyTyperelationshipTlsDomainsrelationshipTlsCertificates"));

var _TlsSubscriptionData = _interopRequireDefault(require("./TlsSubscriptionData"));

var _TlsSubscriptionDataAttributes = _interopRequireDefault(require("./TlsSubscriptionDataAttributes"));

var _TlsSubscriptionResponseDataAllOf = _interopRequireDefault(require("./TlsSubscriptionResponseDataAllOf"));

var _TypeTlsSubscription = _interopRequireDefault(require("./TypeTlsSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsSubscriptionResponseData model module.
 * @module model/TlsSubscriptionResponseData
 * @version 3.0.0-alpha1
 */
var TlsSubscriptionResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsSubscriptionResponseData</code>.
   * @alias module:model/TlsSubscriptionResponseData
   * @implements module:model/TlsSubscriptionData
   * @implements module:model/TlsSubscriptionResponseDataAllOf
   */
  function TlsSubscriptionResponseData() {
    _classCallCheck(this, TlsSubscriptionResponseData);

    _TlsSubscriptionData["default"].initialize(this);

    _TlsSubscriptionResponseDataAllOf["default"].initialize(this);

    TlsSubscriptionResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsSubscriptionResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsSubscriptionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionResponseData} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionResponseData} The populated <code>TlsSubscriptionResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsSubscriptionResponseData();

        _TlsSubscriptionData["default"].constructFromObject(data, obj);

        _TlsSubscriptionResponseDataAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsSubscription["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _TlsSubscriptionDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], _AnyOfAnyTypeAnyTyperelationshipTlsDomainsrelationshipTlsCertificates["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsSubscriptionResponseData;
}();
/**
 * @member {module:model/TypeTlsSubscription} type
 */


TlsSubscriptionResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/TlsSubscriptionDataAttributes} attributes
 */

TlsSubscriptionResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/AnyOfAnyTypeAnyTyperelationshipTlsDomainsrelationshipTlsCertificates} relationships
 */

TlsSubscriptionResponseData.prototype['relationships'] = undefined;
/**
 * Alphanumeric string identifying a TLS subscription.
 * @member {String} id
 */

TlsSubscriptionResponseData.prototype['id'] = undefined; // Implement TlsSubscriptionData interface:

/**
 * @member {module:model/TypeTlsSubscription} type
 */

_TlsSubscriptionData["default"].prototype['type'] = undefined;
/**
 * @member {module:model/TlsSubscriptionDataAttributes} attributes
 */

_TlsSubscriptionData["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsSubscription} relationships
 */

_TlsSubscriptionData["default"].prototype['relationships'] = undefined; // Implement TlsSubscriptionResponseDataAllOf interface:

/**
 * Alphanumeric string identifying a TLS subscription.
 * @member {String} id
 */

_TlsSubscriptionResponseDataAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/TlsSubscriptionDataAttributes} attributes
 */

_TlsSubscriptionResponseDataAllOf["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/AnyOfAnyTypeAnyTyperelationshipTlsDomainsrelationshipTlsCertificates} relationships
 */

_TlsSubscriptionResponseDataAllOf["default"].prototype['relationships'] = undefined;
var _default = TlsSubscriptionResponseData;
exports["default"] = _default;