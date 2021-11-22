"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsSubscription = _interopRequireDefault(require("./RelationshipsForTlsSubscription"));

var _TlsSubscriptionDataAttributes = _interopRequireDefault(require("./TlsSubscriptionDataAttributes"));

var _TypeTlsSubscription = _interopRequireDefault(require("./TypeTlsSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsSubscriptionData model module.
 * @module model/TlsSubscriptionData
 * @version 3.0.0-alpha1
 */
var TlsSubscriptionData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsSubscriptionData</code>.
   * @alias module:model/TlsSubscriptionData
   */
  function TlsSubscriptionData() {
    _classCallCheck(this, TlsSubscriptionData);

    TlsSubscriptionData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsSubscriptionData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsSubscriptionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionData} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionData} The populated <code>TlsSubscriptionData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsSubscriptionData();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsSubscription["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _TlsSubscriptionDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsSubscription["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return TlsSubscriptionData;
}();
/**
 * @member {module:model/TypeTlsSubscription} type
 */


TlsSubscriptionData.prototype['type'] = undefined;
/**
 * @member {module:model/TlsSubscriptionDataAttributes} attributes
 */

TlsSubscriptionData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsSubscription} relationships
 */

TlsSubscriptionData.prototype['relationships'] = undefined;
var _default = TlsSubscriptionData;
exports["default"] = _default;