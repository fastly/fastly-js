"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsActivation = _interopRequireDefault(require("./RelationshipsForTlsActivation"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TlsActivationData = _interopRequireDefault(require("./TlsActivationData"));

var _TlsActivationResponseDataAllOf = _interopRequireDefault(require("./TlsActivationResponseDataAllOf"));

var _TypeTlsActivation = _interopRequireDefault(require("./TypeTlsActivation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsActivationResponseData model module.
 * @module model/TlsActivationResponseData
 * @version 3.0.0-alpha1
 */
var TlsActivationResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsActivationResponseData</code>.
   * @alias module:model/TlsActivationResponseData
   */
  function TlsActivationResponseData() {
    _classCallCheck(this, TlsActivationResponseData);

    TlsActivationResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsActivationResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsActivationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsActivationResponseData} obj Optional instance to populate.
     * @return {module:model/TlsActivationResponseData} The populated <code>TlsActivationResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsActivationResponseData();

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsActivation["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsActivation["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _Timestamps["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsActivationResponseData;
}();
/**
 * @member {module:model/RelationshipsForTlsActivation} relationships
 */


TlsActivationResponseData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeTlsActivation} type
 */

TlsActivationResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

TlsActivationResponseData.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a TLS activation.
 * @member {String} id
 */

TlsActivationResponseData.prototype['id'] = undefined;
var _default = TlsActivationResponseData;
exports["default"] = _default;