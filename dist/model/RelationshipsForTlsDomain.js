"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsActivationTlsActivation = _interopRequireDefault(require("./RelationshipTlsActivationTlsActivation"));

var _RelationshipTlsSubscriptionTlsSubscription = _interopRequireDefault(require("./RelationshipTlsSubscriptionTlsSubscription"));

var _RelationshipTlsSubscriptions = _interopRequireDefault(require("./RelationshipTlsSubscriptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForTlsDomain model module.
 * @module model/RelationshipsForTlsDomain
 * @version 3.0.0-alpha1
 */
var RelationshipsForTlsDomain = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForTlsDomain</code>.
   * @alias module:model/RelationshipsForTlsDomain
   * @implements module:model/RelationshipTlsSubscriptions
   */
  function RelationshipsForTlsDomain() {
    _classCallCheck(this, RelationshipsForTlsDomain);

    _RelationshipTlsSubscriptions["default"].initialize(this);

    RelationshipsForTlsDomain.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForTlsDomain, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForTlsDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsDomain} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsDomain} The populated <code>RelationshipsForTlsDomain</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForTlsDomain();

        _RelationshipTlsSubscriptions["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('tls_subscriptions')) {
          obj['tls_subscriptions'] = _RelationshipTlsSubscriptionTlsSubscription["default"].constructFromObject(data['tls_subscriptions']);
        }

        if (data.hasOwnProperty('tls_activations')) {
          obj['tls_activations'] = _RelationshipTlsActivationTlsActivation["default"].constructFromObject(data['tls_activations']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForTlsDomain;
}();
/**
 * @member {module:model/RelationshipTlsSubscriptionTlsSubscription} tls_subscriptions
 */


RelationshipsForTlsDomain.prototype['tls_subscriptions'] = undefined;
/**
 * @member {module:model/RelationshipTlsActivationTlsActivation} tls_activations
 */

RelationshipsForTlsDomain.prototype['tls_activations'] = undefined; // Implement RelationshipTlsSubscriptions interface:

/**
 * @member {module:model/RelationshipTlsSubscriptionTlsSubscription} tls_subscriptions
 */

_RelationshipTlsSubscriptions["default"].prototype['tls_subscriptions'] = undefined;
var _default = RelationshipsForTlsDomain;
exports["default"] = _default;